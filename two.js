(() => {
  const events = {};
  function on(eventName, handler) {
    if (!events[eventName]) {
      events[eventName] = (context) => context;
    }
    events[eventName] = handler(events[eventName])
    return this;
  }

  function handleEvent(eventName, ...args) {
    if (events[eventName]) {
      return events[eventName](...args);
    }
    return ''
  }

  on('ok', (next) => (context, ...arg) => {
    console.log(context + '1', ...arg);
    return next(context, ...arg);
  });
  on('ok', (next) => (context, ...arg) => {
    console.log(context + '2', ...arg);
    return next(context+ 2, ...arg);
  });
  on('ok', (next) => (context, ...arg) => {
    console.log(context + '3', ...arg);
    return next(context, ...arg);
  });

  console.log('final', handleEvent('ok', 'ahihi', 'yes'));
})()
