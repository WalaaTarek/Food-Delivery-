  import colors from "../constant/colors";

  const MenuItem = ({ icon, title, price }) => (
    <div
      style={{
        padding: '15px',
        borderRadius: '8px',
        margin: '10px',
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.backgroundColor = '#fffaf0';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.backgroundColor = 'white';
      }}
    >
      <img
        src={icon}
        alt={title}
        width="100"
        height="100"
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <h4 style={{
        fontWeight: '500',
        fontFamily: "'Poppins', sans-serif",
        color: colors.darkColor,
        letterSpacing: '1px'
      }}>
        {title}
      </h4>
      <h4 style={{
        fontFamily: "'Poppins', sans-serif",
        color: colors.primaryColor,
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '10px'
      }}>
        ${price}
      </h4>

    </div>
  );

export default MenuItem;