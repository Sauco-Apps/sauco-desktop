import { connect } from 'react-redux';
import { votePlaced, addedToVoteList, removedFromVoteList } from '../../actions/voting';
import VoteDialog from './voteDialog';

const mapStateToProps = state => ({
  votedList: state.voting.votedList.filter(item => !item.pending),
  unvotedList: state.voting.unvotedList.filter(item => !item.pending),
  account: state.account,
  activePeer: state.peers.data,
});

const mapDispatchToProps = dispatch => ({
  votePlaced: data => dispatch(votePlaced(data)),
  addedToVoteList: data => dispatch(addedToVoteList(data)),
  removedFromVoteList: data => dispatch(removedFromVoteList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteDialog);
