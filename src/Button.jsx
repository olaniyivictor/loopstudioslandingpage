import PropTypes from 'prop-types';

export default function Button({ children }) {
  return (
    <div>
      <button className='see'>{children}</button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
