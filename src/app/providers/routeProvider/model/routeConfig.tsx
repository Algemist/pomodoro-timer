import { RouteProps } from 'react-router-dom';
import { PomodoroPage } from 'pages/PomodoroPage';
import { StatisticPage } from 'pages/StatisticPage';
import { SettingsPage } from 'pages/SettingsPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    STATISTIC = 'statistic',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.STATISTIC]: '/statistic',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <PomodoroPage />,
    },
    [AppRoutes.STATISTIC]: {
        path: RoutePath.statistic,
        element: <StatisticPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
