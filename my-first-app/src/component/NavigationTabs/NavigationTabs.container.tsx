import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
    DEFAULT_NAVIGATION_TABS_STATE as SOURCE_DEFAULT_NAVIGATION_TABS_STATE,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
    NavigationTabsContainer as SourceNavigationTabsContainer,
} from 'SourceComponent/NavigationTabs/NavigationTabs.container';
import { RootState } from 'Util/Store/Store.type';

// TODO: implement DEFAULT_NAVIGATION_TABS_STATE
export const DEFAULT_NAVIGATION_TABS_STATE = SOURCE_DEFAULT_NAVIGATION_TABS_STATE;
/** @namespace myFirstApp/Component/NavigationTabs/Container/mapStateToProps */
export const mapStateToProps = (state: RootState) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

/** @namespace myFirstApp/Component/NavigationTabs/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

/** @namespace myFirstApp/Component/NavigationTabs/Container */
export class NavigationTabsContainer extends SourceNavigationTabsContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabsContainer);
