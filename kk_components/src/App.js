import logo from './logo.svg';
import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/index.tsx';

function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
      <Button type={ButtonType.Primary} size={ButtonSize.Large}>按钮</Button>
      <Button type={ButtonType.Link} href="www.baidu.com">按钮</Button>
    </div>
  );
}

export default App;
