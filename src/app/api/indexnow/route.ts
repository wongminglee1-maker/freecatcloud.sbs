import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/config/site";
import { ARTICLES_DATA } from "@/data/articles";

export const dynamic = "force-static";

export async function GET() {
  const urlList = [
    `${SITE_CONFIG.domain}/`,
    `${SITE_CONFIG.domain}/services/`,
    `${SITE_CONFIG.domain}/plans/`,
    `${SITE_CONFIG.domain}/devices/`,
    `${SITE_CONFIG.domain}/devices/windows/`,
    `${SITE_CONFIG.domain}/devices/macos/`,
    `${SITE_CONFIG.domain}/devices/android/`,
    `${SITE_CONFIG.domain}/devices/ios/`,
    `${SITE_CONFIG.domain}/devices/linux/`,
    `${SITE_CONFIG.domain}/help/`,
    `${SITE_CONFIG.domain}/faq/`,
    `${SITE_CONFIG.domain}/articles/`,
    ...ARTICLES_DATA.map((a) => `${SITE_CONFIG.domain}/articles/${a.slug}/`),
    `${SITE_CONFIG.domain}/about/`,
    `${SITE_CONFIG.domain}/contact/`,
    `${SITE_CONFIG.domain}/privacy/`,
    `${SITE_CONFIG.domain}/terms/`,
  ];

  const payload = {
    host: "freecatcloud.sbs",
    key: SITE_CONFIG.seo.indexNowKey,
    keyLocation: SITE_CONFIG.seo.indexNowKeyLocation,
    urlList,
  };

  return NextResponse.json({
    status: "ready",
    message: "IndexNow payload generated successfully for Bing & Yandex",
    payload,
    submitEndpoint: "https://api.indexnow.org/indexnow",
  });
}
