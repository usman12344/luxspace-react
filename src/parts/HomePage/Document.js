import UseModalDOM from 'helper/hooks/UseModalDOM';
import useScrollAnchor from 'helper/hooks/useScrollAnchor';
import useScrollToTop from 'helper/hooks/useScrollToTop';

export default function Documents({children}) {
    UseModalDOM();
    useScrollAnchor();
    useScrollToTop();
    return children;
}