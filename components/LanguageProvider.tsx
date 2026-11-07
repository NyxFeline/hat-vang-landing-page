"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "vi";

const translations = {
    en: {
        home: "Home",
        about: "About",
        rice: "Our Rice",
        farmers: "Farmers",
        changeLanguage: "Change language",
        heroTitle: "Pure rice from the paddies, delivered with pride.",
        heroDescription: "Meet the growers cultivating Vietnam's finest rice varieties. From fragrant ST25 to hearty brown rice, every grain is harvested with care and delivered straight to your table.",
        shopHarvest: "Shop the harvest",
        watchVideo: "Watch Video",
        farmer: "Rice Farmer",
        searchLabel: "Search rice varieties or farmers",
        search: "Search",
        partnerFarms: "Partner rice farms",
        growingSeason: "Avg. growing season",
        deliveryZones: "Weekly delivery zones",
        traceable: "Traceable grain sourcing",
        missionTitle: "Great rice starts with great growers.",
        missionDescription: "We connect Vietnamese rice farmers with families who value flavor, nutrition, and fairness. Every bag supports a regional paddy farm and helps build a more sustainable grain supply.",
        meetFarmers: "Meet the farmers",
        paddyStewardship: "Paddy stewardship",
        fairPay: "Fair pay",
        lowWaste: "Low waste",
        productsTitle: "This week's rice selection.",
        seasonalUpdates: "Get seasonal updates and early access.",
        newsletterDescription: "Join our newsletter for new rice arrivals, cooking tips, and stories from the paddy fields.",
        email: "Email address",
        subscribe: "Subscribe",
        sending: "Sending...",
        subscribed: "You're on the list. We'll be in touch soon.",
        emailRequired: "Email is required",
        invalidEmail: "Invalid email",
        error: "Something went wrong. Please try again.",
        closeVideo: "Close video",
        footerDescription: "Connecting Vietnamese rice farmers with families who value flavour, nutrition, and fairness.",
        shop: "Shop",
        company: "Company",
        support: "Support",
        allRightsReserved: "All rights reserved.",
    },
    vi: {
        home: "Trang chủ",
        about: "Về chúng tôi",
        rice: "Các loại gạo",
        farmers: "Nông dân",
        changeLanguage: "Đổi ngôn ngữ",
        heroTitle: "Gạo sạch từ đồng ruộng, trao gửi trọn niềm tự hào.",
        heroDescription: "Gặp gỡ những người nông dân vun trồng các giống gạo ngon nhất Việt Nam. Từ ST25 thơm dẻo đến gạo lứt giàu dinh dưỡng, mỗi hạt gạo đều được thu hoạch cẩn thận và giao tận bàn ăn.",
        shopHarvest: "Mua gạo ngay",
        watchVideo: "Xem video",
        farmer: "Nông dân trồng lúa",
        searchLabel: "Tìm giống gạo hoặc nông dân",
        search: "Tìm kiếm",
        partnerFarms: "Trang trại liên kết",
        growingSeason: "Mùa vụ trung bình",
        deliveryZones: "Khu vực giao hàng mỗi tuần",
        traceable: "Nguồn gạo truy xuất được",
        missionTitle: "Gạo ngon bắt đầu từ người trồng giỏi.",
        missionDescription: "Chúng tôi kết nối nông dân trồng lúa Việt Nam với những gia đình coi trọng hương vị, dinh dưỡng và sự công bằng. Mỗi túi gạo đều hỗ trợ một vùng trồng lúa và góp phần xây dựng nguồn cung bền vững hơn.",
        meetFarmers: "Gặp gỡ nông dân",
        paddyStewardship: "Chăm sóc ruộng lúa",
        fairPay: "Thu nhập công bằng",
        lowWaste: "Giảm lãng phí",
        productsTitle: "Các loại gạo trong tuần này.",
        seasonalUpdates: "Nhận thông tin mùa vụ và ưu đãi sớm.",
        newsletterDescription: "Đăng ký nhận tin về gạo mới, mẹo nấu ăn và những câu chuyện từ đồng ruộng.",
        email: "Địa chỉ email",
        subscribe: "Đăng ký",
        sending: "Đang gửi...",
        subscribed: "Bạn đã được thêm vào danh sách. Hẹn gặp lại sớm!",
        emailRequired: "Vui lòng nhập email",
        invalidEmail: "Email không hợp lệ",
        error: "Đã xảy ra lỗi. Vui lòng thử lại.",
        closeVideo: "Đóng video",
        footerDescription: "Kết nối nông dân trồng lúa Việt Nam với những gia đình trân trọng hương vị, dinh dưỡng và sự công bằng.",
        shop: "Mua gạo",
        company: "Công ty",
        support: "Hỗ trợ",
        allRightsReserved: "Đã đăng ký bản quyền.",
    },
} as const;

type TranslationKey = keyof typeof translations.en;

type LanguageContextValue = {
    language: Language;
    toggleLanguage: () => void;
    t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const savedLanguage = window.localStorage.getItem("hat-vang-language");
        if (savedLanguage === "vi" || savedLanguage === "en") setLanguage(savedLanguage);
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            toggleLanguage: () => {
                const nextLanguage = language === "en" ? "vi" : "en";
                setLanguage(nextLanguage);
                window.localStorage.setItem("hat-vang-language", nextLanguage);
            },
            t: (key: TranslationKey) => translations[language][key],
        }),
        [language],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}
