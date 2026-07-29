import './Avatar.css';

function Avatar() {
  return (
    <div className="Avatar">
      <img
        src={require('../../images/dinith_dp.jpeg')}
        alt="Dinith Jayabodhi"
        className="Avatar-image"
      />
    </div>
  );
}

export default Avatar;
