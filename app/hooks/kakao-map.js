import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

const useKakaoLoader = () => {

  console.log("카카오 키:", process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY);

  
  const [loading, error] = useKakaoLoaderOrigin({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY,
  });

  return [loading, error];
};

export default useKakaoLoader;