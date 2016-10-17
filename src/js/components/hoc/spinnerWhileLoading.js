import { renderComponent, branch } from 'recompose';
import Spinner from '../general/spinner';

const identity = t => t;

export default function(hasLoaded) {
    return branch(
        hasLoaded,
        identity,
        renderComponent(Spinner)
    );
}
