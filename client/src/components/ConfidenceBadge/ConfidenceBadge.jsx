import './confidenceBadge.css';

const ConfidenceBadge = ({ indexCard, statusColor }) => {
  return (
    <strong className='badge'>
      <span className={statusColor}>{indexCard.status}</span>
    </strong>
  )
}

export default ConfidenceBadge;