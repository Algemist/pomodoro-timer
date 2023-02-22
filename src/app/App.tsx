import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { AppRoute } from 'app/providers/routeProvider';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Header />
        <AppRoute />
    </div>
);

export default App;
