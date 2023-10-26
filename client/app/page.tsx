import BannerCarousel from '@/components/BannerCarousel/BannerCarousel';
import Categories from '@/components/Categories/Categories';
import OfferBanner from '@/components/OfferBanner/OfferBanner';

export default function Home() {
  return (
    <div className="w-full h-full border-3 border-red-600 overflow-y flex flex-col items-between justify-around ">
      <div className="flex flex-row justify-evenly w-full h-1/6 mb-4">
        <Categories />
      </div>
      <BannerCarousel />
      <OfferBanner />
    </div>
  );
}
