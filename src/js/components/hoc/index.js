import { renderComponent, renderNothing, branch } from 'recompose';
import { identity } from 'ramda';
import Spinner from '../general/spinner';

/**
 * HOC to render a spinner until condition is met
 */
export const spinnerWhileLoading = (hasLoaded) =>
    branch(hasLoaded, identity, renderComponent(Spinner));

/**
 * HOC to render nothing until condition is met
 */
export const nothingWhileLoading = (hasLoaded) =>
    branch(hasLoaded, identity, renderNothing);
