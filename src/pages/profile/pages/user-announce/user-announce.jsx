import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button/button';
import img from '../../../../assets/images/notfound.svg';
import { useUserAnnouncements } from './service/query/useUserAnnounce';
import { loadState } from '../../../../lib/storage';

export const UserAnnounce = () => {
  const user = loadState("user");
  const { data, isLoading, isError } = useUserAnnouncements(user?.user?.email);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className='container'>
      <div className='mb-8'>
        <Link to='/announce'>
          <Button variant="primary">
            E'lon qo'shish
          </Button>
        </Link>
      </div>

      {data?.length > 0 ? (

        <div>
          <h2 className='text-[24px] font-semibold mb-8'>Sizning e'lonlaringiz</h2>
          <div className='grid grid-cols-4 gap-6'>
            {
              data.map((announcement) => (
                <div className='w-[220px] border p-2 border-gray rounded-lg'>
                  <Link to={`/products/${announcement.datakey}/${announcement.id}`}>
                    <div className='w-[170px] h-[170px] overflow-hidden'>
                      <img className='w-full object-cover object-center' src={announcement.image} alt="" />
                    </div>
                  </Link>
                  <div className='h-[50px] overflow-hidden mb-4'>
                    <h3>{announcement.title.slice(0, 30)}...</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Button className="text-[11px]" variant="primary">
                      Tahrirlash
                    </Button>
                    <Button className=" hover: border border-vivaldi-red text-[11px] bg-vivaldi-red" variant="primary">
                      O'chirish
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>) : (
        <div className='flex items-center gap-2 flex-col justify-center'>
          <img src={img} alt="" />
          <h2 className='text-[16px] font-bold'>Hali hech qanday e'lonlar yo'q!</h2>
          <p className='text-[14px]'>Barcha e'lonlaringiz shu yerda saqlanadi.</p>
        </div>
      )}
    </div>
  );
};
