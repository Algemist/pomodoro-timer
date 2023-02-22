import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => (
    <div className={classNames('app', {}, [])}>
        ...
    </div>
);

export default App;
