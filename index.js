(() => {
  const append = (next) => (context) => {
    context += 'x';
    return next(context);
  };

  const release = (next) => (context) => {
    return context;
  }

  const clear = (next) => (context) => {
    return next('');
  }

  const skip = (next) => (context) => {
    return next(context);
  }

  const plugins = [
    append,
    release,
    append,
    clear,
    skip,
  ];

  let handler = res => res;
  for (const plugin of plugins.reverse()) {
    handler = plugin(handler);
  }

  console.log(handler(''))
})()
