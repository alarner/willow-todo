import RootComponent from './components/root/src/component';

var root = new RootComponent();


var ReactRoot = root.react;
React.render(
  <ReactRoot />,
  document.getElementById('app')
);

// React.render(root.react.render(), document.getElementById('app'));