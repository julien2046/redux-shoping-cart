import { connect } from 'react-redux';
import component from './component';


const mapState = state => ({
  firstName: state.user.firstName,
  title: state.app.name,
});

export default connect(mapState)(component);
