import glamorous from 'glamorous';
import appVars from '../../config/appVars';

export default glamorous.h2({
    color: appVars.theme.whiteText,
    fontFamily: 'Radiance',
    fontSize: '27px',
    margin: '0px',
    padding: '27px',
    letterSpacing: '3px',
    display: 'inline-block',
    backgroundColor: appVars.theme.redHighlight,
    textTransform: 'uppercase',
});