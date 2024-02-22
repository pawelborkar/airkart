import BannerCarousel from '@/components/BannerCarousel/BannerCarousel';
import BannerCard from '@/components/BannerContainer/BannerCard/BannerCard';
import BannerContainer from '@/components/BannerContainer/BannerContainer';
import Categories from '@/components/Categories/Categories';
import OfferBanner from '@/components/OfferBanner/OfferBanner';
import ProductCarousel from '@/components/ProductCarousel/ProductCarousel';
export default function Home() {
  return (
    <div className="w-full h-full overflow-y flex flex-col items-between justify-around ">
      <div className="flex flex-row justify-evenly w-full h-1/6 mb-4">
        <Categories />
      </div>
      <BannerCarousel />
      <OfferBanner />
      <h2 className='p-3 text-2xl font-bold'>Most Popular</h2>
      <ProductCarousel category="electronics" />
      <BannerContainer />
      <BannerCard banner_url="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Event/Train_GW_editorial_2300x646._CB575880778_.jpg" />
      <h2 className='p-3 text-2xl font-bold'>New Arrivals</h2>
      <ProductCarousel category="fashion" />
    </div>
  );
}
