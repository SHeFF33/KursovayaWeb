import { useDispatch } from 'react-redux';
import { searchName } from '../../../redux/features/initialGoods/initialGoodsSlice';



const SearchTitle = () => {
  const dispatch = useDispatch();


  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      dispatch(searchName(e.target.value));
    }
    if (e.target.value.length < 1) {
      dispatch(searchName(e.target.value))
    }
  };

  return (
    <div className='flex justify-center'>
      <input
        onKeyUp={handleSearch}
        className='bg-gray-100 w-[90%] px-6 py-2 rounded-full mt-2 mb-4'
      />
    </div>
  );
};

export default SearchTitle;
