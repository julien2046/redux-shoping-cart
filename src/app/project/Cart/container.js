import { connect } from 'react-redux';
import component from './component';


const mapState = state => ({
  title: state.app.name,
});

export default connect(mapState)(component);
