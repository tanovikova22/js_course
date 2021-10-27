class CustomPromise {

   constructor(executor) {
      this.state = 'pending';
      this.value = undefined;

      this.handlers = [];


      try {
         executor(this.res, this.rej);
      } catch (err) {
          this.res(err);
      }

   }

    static resolve(value) {
      return new CustomPromise((res, rej) => res(value));
   }

    static reject(value) {
        new CustomPromise((res, rej) => rej(value))
   }

   res = (value) => {
      return this.setValue('fulfilled', value);
   }

   rej = (value) => {
      return this.setValue('rejected', value);
   }

     setValue(state, value) {
      setTimeout(() => {
        if(this.state === 'pending') {
          this.state = state;
          this.value = value;
        } else {
            return;
        }

        if(this.isPromise(value)) {
            return value.then(this.res, this.rej);
        }

        this.handleHandlers();

      }, 0);

   }

   isPromise(value) {
       return value instanceof CustomPromise;
   }

    handleHandlers() {
        if (this.state === 'pending') {
            return null;
        } else {
            this.handlers.forEach((handler) => {
                if (this.state === 'fulfilled') {
                    return handler.onSuccess(this.value);
                }
                return handler.onFail(this.value);
            });
            this.handlers = [];
        }

    }

    then(onSuc, onErr) {
       let newHandlers = {};
       return new CustomPromise((res, rej) => {
           newHandlers = {
               onSuccess: function(val) {

                   if(onSuc) {
                       try {
                           return res(onSuc(val));
                       } catch(err) {
                           return rej(err);
                       }
                   } else {
                       return res(val);
                   }
               },
               onFail: function(val) {
                   if(onErr) {
                       try {
                           return res(onErr(val));
                       } catch(err) {
                           return rej(err);
                       }
                   } else {
                       return rej(val);
                   }
               }
           };
           this.handlers.push(newHandlers);
           this.handleHandlers();
       })
    }

    catch(onError) {
       return this.then(null, onError);
    }
}

const test = new CustomPromise((res, rej) => {
    setTimeout(() => {
        res('Promise 1 is resolved')
    }, 1000);
});

test.then((val) => {
    console.log(val);
});

CustomPromise.resolve(10).then((val) => console.log(val));

