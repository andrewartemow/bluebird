import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        fill="rgb(30, 159, 202)"
        width="50px"
        height="50px"
        viewBox="-25.6 -25.6 307.20 307.20"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        stroke="rgb(30, 159, 202)"
        transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {' '}
          <path d="M172,68a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,172,68Zm-55.07324,65.43945-40,48a4.00015,4.00015,0,0,0,6.14648,5.1211l40-48a4.00015,4.00015,0,1,0-6.14648-5.1211ZM236,80a3.9985,3.9985,0,0,1-1.78125,3.32812L212,98.14062V120A100.113,100.113,0,0,1,112,220H8a3.99977,3.99977,0,0,1-3.123-6.499L100,94.59668V76A56.00814,56.00814,0,0,1,209.794,60.3877l24.4248,16.28418A3.99914,3.99914,0,0,1,236,80Zm-11.21094,0-20.6748-13.78418a3.99981,3.99981,0,0,1-1.65235-2.32227A48.00774,48.00774,0,0,0,108,76V96a4.00184,4.00184,0,0,1-.87695,2.499L16.32227,212H112a92.10447,92.10447,0,0,0,92-92V96a3.9985,3.9985,0,0,1,1.78125-3.32812Z" />{' '}
        </g>
      </svg>
      <h3>BlueBird</h3>
    </div>
  );
};

export default Logo;
