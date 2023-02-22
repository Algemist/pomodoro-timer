import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/routeProvider/model/routeConfig';
import { Suspense } from 'react';

export const AppRoute = () => (
    <Routes>
        {Object.values(routeConfig).map(({
            element,
            path,
        }) => (
            <Route
                path={path}
                key={path}
                element={(
                    <Suspense fallback="loading...">
                        {element}
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
