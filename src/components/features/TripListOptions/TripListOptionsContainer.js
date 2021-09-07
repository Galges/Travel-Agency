import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  addTag,
  removeTag,
  changeFromDuration,
  changeToDuration,
} from '../../../redux/filtersRedux';

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase)),
  addTag: (tag) => dispatch(addTag(tag)),
  removeTag: (tag) => dispatch(removeTag(tag)),
  changeFromDuration: (value) => dispatch(changeFromDuration(value)),
  changeToDuration: (value) => dispatch(changeToDuration(value)),
  // TODO - add more dispatchers for other filters - OK
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);