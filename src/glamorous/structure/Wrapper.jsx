import glamorous from 'glamorous';
import appVars from '../../config/appVars';

export default glamorous.div({
    width: '75%',
    display: 'block',
    margin: '0 auto',
    padding: '45px 0',

    [appVars.media.desktop]: {
        width: '50%',
    },
});