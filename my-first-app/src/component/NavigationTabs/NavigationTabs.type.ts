import {
    NavigationTabsContainerMapStateProps as SourceNavigationTabsContainerMapStateProps, NavigationTabsContainerPropsKeys as SourceNavigationTabsContainerPropsKeys,
    NavigationTabsContainerState as SourceNavigationTabsContainerState,
} from 'SourceComponent/NavigationTabs/NavigationTabs.type';

export interface NavigationTabsContainerMapStateProps extends SourceNavigationTabsContainerMapStateProps {}

declare module 'SourceComponent/NavigationTabs/NavigationTabs.type' {
    export interface NavigationTabsContainerMapStateProps {}

    export interface NavigationTabsContainerMapDispatchProps {}

    export interface NavigationTabsContainerFunctions {}

    export interface NavigationTabsContainerProps {}

    export interface NavigationTabsComponentProps {}
}

// TODO: extend type NavigationTabsContainerState
export type NavigationTabsContainerState = SourceNavigationTabsContainerState;

// TODO: extend type NavigationTabsContainerPropsKeys
export type NavigationTabsContainerPropsKeys = SourceNavigationTabsContainerPropsKeys;
