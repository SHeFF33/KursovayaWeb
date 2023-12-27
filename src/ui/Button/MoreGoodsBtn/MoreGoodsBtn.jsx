import { useDispatch } from 'react-redux';
import { addGoods } from '../../../redux/features/initialGoods/initialGoodsSlice';

const MoreGoodsBtn = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addGoods());
  };

  return (
    <button onClick={onClick} className='text-white border-2 px-6 py-1 mb-4 rounded-3xl hover:bg-slate-200 duration-200'>Далее</button>
  );
};

export default MoreGoodsBtn;

