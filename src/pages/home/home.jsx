import React from 'react';
import { Searchbar } from '../../components/searchbar/searchbar';
import { useGetCategories } from './service/query/useGetCategories';
import { Link } from 'react-router-dom';
import { useGetAll } from './service/query/useGetAll';
import { ProductCard } from '../../components/card/product-card';

export const Home = () => {
    const { data: categories } = useGetCategories();
    const [page, setPage] = React.useState(1)

    const { data: allData, isLoading } = useGetAll(page);

    const qoldiq = parseInt(Number(allData?.page_count) / allData?.limit);
    const result = React.useMemo(() => {
        let pageNumbers = [];
        if (qoldiq) {
            for (let i = 1; i <= qoldiq + 1; i++) {
                pageNumbers.push(i);
            }
        }
        return pageNumbers;
    }, [allData?.page_count]);

    const changePage = (pageNumber) => {
        setPage(pageNumber);
    };

    return (
        <>
            <section>
                <Searchbar />
            </section>
            <section className='bg-white mt-[170px] pt-8 pb-[52px]'>
                <div className="container">
                    <h2 className='text-[22px] font-bold mb-6 text-black-out'>Kategoriyalar</h2>
                    <div className='grid gap-9 grid-cols-9'>
                        {categories?.map((category) => (
                            <div key={category.id} className='w-[84px] hover:drop hover:translate-y-[-15px] hover:drop-shadow-md hover:scale-[1.1] transition-all duration-500 text-center'>
                                <Link to={`/category/${category.datakey}`}>
                                    <div className='mb-4'>
                                        <img src={category.img} alt="" />
                                    </div>
                                    <h3 className='text-dark-void text-[14px]'>{category.name}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='pt-8 pb-[56px] bg-primary'>
                <div className="container">
                    <h2 className='text-[22px] font-bold mb-9 text-black-out'>Siz uchun maxsus</h2>
                    <div className='grid grid-cols-5 gap-4'>
                        {allData?.data?.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                    <div className='w-full flex items-center gap-5 py-10 justify-center'>
                        {result.map((pageNumber) => (
                            <button
                                className={`w-10 h-10 border rounded-lg border-gray ${pageNumber === page ? 'bg-black text-white' : ''}`}
                                onClick={() => changePage(pageNumber)}
                                key={pageNumber}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
