import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-icon">BUSCAR</button>
      <div className="btn-search-container">
        <p>Digite sua busca</p>
      </div>
    </div>
  );
};

export default ButtonSearch;
