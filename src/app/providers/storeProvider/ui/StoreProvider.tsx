import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../model/store';

interface StoreProviderProps {
    children: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
    } = props;

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
