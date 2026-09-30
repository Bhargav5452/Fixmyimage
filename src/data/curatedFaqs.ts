/**
 * FixMyImage Curated FAQ Dataset
 * ─────────────────────────────────────────────────────────────────
 * Source of truth for on-page FAQ content across all 22 tool routes.
 * Preserves internal research metadata (observed vs proposed, PAA sources).
 */

export interface CuratedFaqItem {
  question: string;
  answer: string;
  observed_or_proposed: "observed" | "proposed";
  source_type: string;
  source_query?: string | null;
  source_url?: string | null;
  notes?: string;
}

export interface CuratedPageRoute {
  route: string;
  main_keyword: string;
  date_researched: string;
  country_locale_researched: string;
  paa_availability: string;
  selected_faqs: CuratedFaqItem[];
}

export interface RemovedFaqItem {
  route: string;
  question: string;
  answer: string;
  observed_or_proposed: "observed" | "proposed";
  source_type: string;
  source_query?: string | null;
  source_url?: string | null;
  reason: string;
}

export interface CuratedFaqDataset {
  status: string;
  source_dataset: string;
  product_commit_checked: string;
  selection_priority: string[];
  selected_pages: CuratedPageRoute[];
  removed_questions: RemovedFaqItem[];
}

export const CURATED_FAQ_DATASET: CuratedFaqDataset = {
  status: "curated research for review; no repository implementation",
  source_dataset: "FixMyImage-FAQ-research.json",
  product_commit_checked: "319448ce42dfb68ca9429ad324953d92e3b923ee",
  selection_priority: [
    "main-keyword Google PAA",
    "closely related-query Google PAA",
    "directly useful proposed editorial FAQ"
  ],
  selected_pages: [
    {
      route: "/compress-image",
      main_keyword: "image compressor",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How does an image compressor work?",
          answer: "It reduces the number of bytes needed to store an image, either without losing pixel data or by discarding some detail. The amount saved depends on the source and settings.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor how to use",
          source_url: "https://www.google.com/search?q=image%20compressor%20how%20to%20use&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How can I compress my image?",
          answer: "Choose a target file size, process the image, then compare the saved size and appearance. A very small target may require smaller pixel dimensions.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor how to use",
          source_url: "https://www.google.com/search?q=image%20compressor%20how%20to%20use&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How do I compress images on my phone?",
          answer: "Use a mobile browser or image app that supports your file, then inspect the exported size. Browser performance depends on the device and image size.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor how to use",
          source_url: "https://www.google.com/search?q=image%20compressor%20how%20to%20use&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "Why is my compressed image still large?",
          answer: "A large pixel count, a detailed photo, or an already efficient source file can limit further savings. Check the output format and dimensions as well as the compression setting.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can I compress a transparent image?",
          answer: "Yes, with a format and settings that preserve transparency. JPG cannot store transparency, so converting to JPG requires a background color.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/compress-image-to-10kb",
      main_keyword: "image compressor to 10kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "observed in India; expanded",
      selected_faqs: [
        {
          question: "How can I compress an image to 10KB?",
          answer: "Reduce pixel dimensions and choose an efficient format or stronger compression, then check the exported file size. A detailed image may not reach 10KB without obvious quality loss.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor to 10kb",
          source_url: "https://www.google.com/search?q=image%20compressor%20to%2010kb&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "Is 10KB a small photo size?",
          answer: "Yes. Ten kilobytes leaves little room for a detailed photograph, so a tiny thumbnail or simple graphic is more realistic than a full-size photo.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor to 10kb",
          source_url: "https://www.google.com/search?q=image%20compressor%20to%2010kb&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "How to get a file less than 10KB?",
          answer: "Set a target below the receiving site's limit, reduce dimensions if needed, and inspect the downloaded file. Some images cannot stay legible below 10KB.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor to 10kb",
          source_url: "https://www.google.com/search?q=image%20compressor%20to%2010kb&gl=in&hl=en&pws=0",
          notes: "revealed after PAA expansion"
        },
        {
          question: "Will a passport photo still be clear at 10KB?",
          answer: "It may not be. Check the form's required dimensions and inspect facial details at the displayed size before submitting.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/compress-image-to-20kb",
      main_keyword: "image compressor to 20kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How can I resize an image to 20KB to 50KB?",
          answer: "KB is file size, not pixel dimensions. Compress or downscale the image and check that its saved size falls in the required range.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 20kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%2020kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How can I convert a JPG image to a 20KB JPEG file?",
          answer: "JPG and JPEG are the same format. Set a 20KB target; FixMyImage may reduce quality and pixel dimensions, so check the output for legibility.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 20kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%2020kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        }
      ]
    },
    {
      route: "/compress-image-to-30kb",
      main_keyword: "image compressor to 30kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "Is 30KB too small for a photo?",
          answer: "It can be too small for a detailed or full-size photo. A cropped, small-dimension image has a better chance of fitting while remaining usable.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 30kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%2030kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        }
      ]
    },
    {
      route: "/compress-image-to-40kb",
      main_keyword: "image compressor to 40kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How can I compress a PNG image to 40KB?",
          answer: "Try reducing pixel dimensions and removing unneeded margins, then check the PNG's saved size. Detailed or large PNGs may not reach 40KB without changing format or losing useful detail.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 40kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%2040kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "Is 40KB enough for a profile picture?",
          answer: "It may be enough for a small profile image with simple content. Preview the result at the destination's display size to check facial or logo detail.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 40kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%2040kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        }
      ]
    },
    {
      route: "/compress-image-to-50kb",
      main_keyword: "image compressor to 50kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown in the checked India exact-keyword result",
      selected_faqs: [
        {
          question: "How can I make an image smaller than 50KB?",
          answer: "Choose a 50KB target and inspect the output. The compressor may lower quality or pixel dimensions to reach it; cropping unneeded background first can help keep the subject clearer.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can every image be reduced to 50KB?",
          answer: "No. A 50KB limit still calls for a compact image, especially if the source is a high-resolution phone photo. Some sources cannot meet 50KB while remaining suitable for their intended use.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "What should I check before uploading a 50KB image?",
          answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/compress-image-to-100kb",
      main_keyword: "image compressor to 100kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How to take a 100 kb photo in mobile?",
          answer: "Take the photo normally, then crop, resize, or compress a copy until the saved file is under the required limit. Camera apps do not generally guarantee an exact 100KB capture.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 100kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%20100kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How can I compress a PNG image to 100KB?",
          answer: "Reduce dimensions or simplify the image, then inspect the exported PNG. If the destination accepts another format and transparency is not needed, an efficient photo format may be smaller.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 100kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%20100kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        }
      ]
    },
    {
      route: "/compress-image-to-200kb",
      main_keyword: "image compressor to 200kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How can I compress a JPG image to 200KB?",
          answer: "Set a 200KB target and inspect the saved image. If the original is already below 200KB, FixMyImage leaves it unchanged; otherwise it may reduce quality or dimensions.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 200kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%20200kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How to edit a photo in 200 kb in mobile?",
          answer: "Crop to the needed area, resize for the destination, and compress a copy on your phone. Inspect the saved size and important details before upload.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 200kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%20200kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How big is 200 KB?",
          answer: "It describes file storage, not physical or pixel dimensions. A 200KB image can have many different widths and heights depending on its content and encoding.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 200kb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%20200kb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        }
      ]
    },
    {
      route: "/compress-image-to-500kb",
      main_keyword: "image compressor to 500kb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "observed in India on exact keyword",
      selected_faqs: [
        {
          question: "How can I compress an image to 500KB?",
          answer: "Choose a 500KB target, then check the exported file size and appearance. A large or detailed source may need downscaling as well as compression.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor to 500kb",
          source_url: "https://www.google.com/search?q=image%20compressor%20to%20500kb&gl=in&hl=en&pws=0",
          notes: "visible initially on exact-keyword result"
        },
        {
          question: "Why compress a JPEG to 500KB?",
          answer: "A website or form may set a 500KB upload ceiling, or a smaller file may transfer faster. Compress only as much as needed for the destination.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "image compressor to 500kb",
          source_url: "https://www.google.com/search?q=image%20compressor%20to%20500kb&gl=in&hl=en&pws=0",
          notes: "visible initially on exact-keyword result"
        }
      ]
    },
    {
      route: "/compress-image-to-1mb",
      main_keyword: "image compressor to 1mb",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How can I compress JPG images to 1 MB?",
          answer: "Set a 1MB target and inspect the result. FixMyImage leaves an image unchanged if it is already below that limit; otherwise it may reduce quality or dimensions.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 1mb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%201mb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How big is a 1 MB image?",
          answer: "One MB is a file-size measure, roughly one million bytes in decimal usage. It does not specify image width, height, or print size.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 1mb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%201mb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How do I compress a PNG to 1MB?",
          answer: "Reduce pixel dimensions or unnecessary detail and check the saved PNG. If the destination accepts JPG or WebP and transparency is not needed, another format may be smaller.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to compress image to 1mb",
          source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%201mb&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        }
      ]
    },
    {
      route: "/resize-image",
      main_keyword: "image resizer",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown in the checked India exact-keyword result",
      selected_faqs: [
        {
          question: "How do I resize an image without stretching it?",
          answer: "Keep the original aspect ratio when setting a new width or height. If the destination needs a different shape, crop instead of forcing both dimensions.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          "question": "Does making an image larger add detail?",
          "answer": "No. Upscaling creates more pixels but cannot recover detail that was never captured in the source.",
          "observed_or_proposed": "proposed",
          "source_type": "Proposed — not observed in Google",
          "source_query": null,
          "source_url": null,
          "notes": "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "What is the difference between resizing and compressing?",
          answer: "Resizing changes dimensions; compression changes how much storage the image uses. They can be combined when both a pixel limit and a file-size limit apply.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          "source_query": null,
          "source_url": null,
          "notes": "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Why does a resized image look blurry?",
          answer: "Upscaling, repeated resizing, or low-quality export can soften edges. Start from the highest-quality original and resize only once when possible.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Should I crop or resize a photo for a square profile image?",
          answer: "Crop to choose the square area, then resize to the required pixels. Resizing a rectangular photo directly into a square distorts it.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/resize-image-in-pixels",
      main_keyword: "image resizer in pixels",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How to resize an image using pixels?",
          answer: "Enter the desired pixel width and height, keeping aspect ratio locked unless you want distortion. Check the saved dimensions after export.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to resize image in pixels",
          source_url: "https://www.google.com/search?q=how%20to%20resize%20image%20in%20pixels&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How to make a photo 630 * 810 pixels?",
          answer: "Crop the photo to a 7:9 aspect ratio first, then resize it to 630 × 810 pixels. Check the destination's framing rules before uploading.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to resize image in pixels",
          source_url: "https://www.google.com/search?q=how%20to%20resize%20image%20in%20pixels&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "How do I resize to exact pixels without distortion?",
          answer: "Match the target aspect ratio by cropping first, then resize to the required pixel dimensions. Otherwise the image may stretch or need padding.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "What is the difference between pixels and KB?",
          answer: "Pixels describe the image grid; KB describes file size. A pixel requirement and a KB requirement must be checked separately.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "How can I check an image's final pixel dimensions?",
          answer: "Inspect the downloaded file's properties or open it in an image viewer. Confirm both width and height against the destination's requirements.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/resize-image-in-cm",
      main_keyword: "image resizer in cm",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown on exact keyword; observed on supplementary query",
      selected_faqs: [
        {
          question: "How to convert photo to 4.5 cm * 3.5 cm?",
          answer: "Crop to the required ratio, then convert those centimeters to pixels at the chosen PPI. FixMyImage's current cm mode uses 300 PPI, giving about 531 × 413 pixels.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to resize image in cm",
          source_url: "https://www.google.com/search?q=how%20to%20resize%20image%20in%20cm&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "What is 1920x1080 pixel in cm?",
          answer: "It depends on the assumed PPI. At 300 PPI, 1920 × 1080 pixels is about 16.3 × 9.1 cm; another PPI gives a different physical size.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "how to resize image in cm",
          source_url: "https://www.google.com/search?q=how%20to%20resize%20image%20in%20cm&gl=in&hl=en&pws=0",
          notes: "visible initially on supplementary-query result"
        },
        {
          question: "Will changing the cm value change my image pixels?",
          answer: "Yes. FixMyImage converts the chosen centimeters to pixels at 300 PPI and resamples the image; it does not merely change print-size metadata.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "What PPI should I use for a photo printed in centimeters?",
          answer: "Follow the printer or receiving service's requirement. Around 300 PPI is a common photo-print target, but the needed value depends on viewing distance and process.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Does a cm requirement also impose a file-size limit?",
          answer: "No. Physical dimensions, pixel resolution, and file size are separate requirements. Check all three if a form specifies them.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/bulk-image-resizer",
      main_keyword: "bulk image resizer",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown in the checked India exact-keyword result",
      selected_faqs: [
        {
          question: "Can bulk resizing keep each image's aspect ratio?",
          answer: "Yes in percentage mode, which scales each source image independently. Fixed pixel or centimeter dimensions are applied to every file and can stretch images with different ratios.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can I resize portrait and landscape photos together?",
          answer: "Yes. Use percentage mode to preserve each photo's shape; applying one fixed width and height to both orientations can distort them.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "How do I choose one size for many different images?",
          answer: "Use the same percentage when the images have different aspect ratios. Choose fixed pixel dimensions only when their ratios match or you have cropped them to the same shape first.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can a bulk image resizer process PNG and JPG together?",
          answer: "Yes. The current FixMyImage resizer accepts JPG, PNG, and WebP in one batch. Keep the original format or choose an output format; JPG output cannot preserve PNG transparency.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Is there a limit to the number of images I can resize at once?",
          answer: "The current FixMyImage interface accepts up to 50 images per batch. Large files can still be limited by your device's memory and browser performance.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/convert-image",
      main_keyword: "image converter",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown in the checked India exact-keyword result",
      selected_faqs: [
        {
          question: "What does converting an image format change?",
          answer: "It re-encodes the pixels in a different file format. The output may change file size, transparency support, and compatibility, but conversion does not add missing detail.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Which image format should I choose for a photo?",
          answer: "JPG is broadly compatible and usually compact for photographs. WebP and AVIF can be smaller when both your browser can export them and the destination accepts them; PNG is useful when lossless detail or transparency matters.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Will converting an image improve its quality?",
          answer: "No. Re-encoding cannot restore detail already lost from the source, and a lossy output can remove more detail.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can I convert several images at once?",
          answer: "The current FixMyImage converter's code accepts up to 50 files per batch. Check each result because a file that cannot be decoded may fail while others finish.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "What happens to transparency when I convert to JPG?",
          answer: "JPG cannot store transparent pixels. The current FixMyImage converter fills those areas white before encoding JPG.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Why might an image format fail to convert in my browser?",
          answer: "The browser must decode the source and encode the destination format. Unsupported or damaged inputs, or an unsupported output encoder, can cause a conversion error.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/jpg-to-png",
      main_keyword: "jpg to png",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown in the checked India and US exact-keyword results",
      selected_faqs: [
        {
          question: "Does converting JPG to PNG make the image lossless?",
          answer: "The new PNG is saved without further lossy JPEG compression, but it cannot restore details that the original JPG already lost.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Will a JPG become transparent after conversion to PNG?",
          answer: "No. PNG can store transparency, but converting an opaque JPG does not invent transparent areas.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Why is my PNG larger than the JPG I converted?",
          answer: "PNG uses lossless compression, while the source JPG may have discarded detail to stay small. Photographs often grow when saved as PNG.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can I change .jpg to .png in the filename?",
          answer: "Renaming the extension does not convert the encoded data. Export or convert the image as a PNG file.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "When is JPG to PNG useful?",
          answer: "It can be useful when an application requires PNG or when you plan to edit and resave without additional JPEG loss. It may increase file size.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/png-to-jpg",
      main_keyword: "png to jpg",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "observed in India; expanded",
      selected_faqs: [
        {
          question: "How do I turn a PNG image to JPG?",
          answer: "Convert the PNG to JPEG and save the new file rather than renaming its extension. In the current FixMyImage converter, transparent areas are filled white before JPG export.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "png to jpg",
          source_url: "https://www.google.com/search?q=png%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "Can I rename PNG to JPG?",
          answer: "No. Renaming the extension does not change PNG-encoded data into JPEG data; use an image converter.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "png to jpg",
          source_url: "https://www.google.com/search?q=png%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "Is PNG better than JPEG?",
          answer: "It depends on the image. PNG suits transparent or crisp graphics, while JPG often gives smaller files for photographs.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "png to jpg",
          source_url: "https://www.google.com/search?q=png%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "Why convert PNG to JPG?",
          answer: "JPG is widely accepted and may make a photographic image smaller. It removes transparency and may introduce lossy compression artifacts.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "png to jpg",
          source_url: "https://www.google.com/search?q=png%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "revealed after PAA expansion"
        },
        {
          question: "What color replaces transparent PNG pixels in JPG?",
          answer: "JPG has no transparency. The current FixMyImage converter places transparent areas on a white background.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/webp-to-jpg",
      main_keyword: "webp to jpg",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "observed in India; expanded",
      selected_faqs: [
        {
          question: "Can I change a WebP file to JPG?",
          answer: "Yes, if the browser can decode that WebP file. FixMyImage's converter exports a JPEG at the source dimensions and fills transparent areas white.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "webp to jpg",
          source_url: "https://www.google.com/search?q=webp%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "Why are images saving as WebP?",
          answer: "Some websites serve WebP because it can compress images efficiently. If another application requires JPG, convert the downloaded WebP rather than merely renaming it.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "webp to jpg",
          source_url: "https://www.google.com/search?q=webp%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "Is WebP better than JPG?",
          answer: "WebP can support transparency and may compress some images more efficiently, while JPG has broader legacy compatibility. The best format depends on where the image will be used.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "webp to jpg",
          source_url: "https://www.google.com/search?q=webp%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "revealed after PAA expansion"
        },
        {
          question: "How do I open a WebP file?",
          answer: "Use a browser or image app that supports WebP. If an older application cannot open it, convert a copy to JPG or PNG.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "webp to jpg",
          source_url: "https://www.google.com/search?q=webp%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "revealed after PAA expansion"
        },
        {
          question: "What happens to a transparent WebP when converted to JPG?",
          answer: "JPG cannot store transparency. FixMyImage's current converter fills transparent pixels white.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/webp-to-png",
      main_keyword: "webp to png",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown in the checked India exact-keyword result",
      selected_faqs: [
        {
          question: "Why convert a WebP image to PNG?",
          answer: "PNG may be needed by an editor or upload form, and it can keep transparency. The output is often larger than a compact WebP source.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Will WebP transparency remain in a PNG?",
          answer: "It can. FixMyImage's canvas conversion retains transparent pixels when the browser decodes them and PNG export succeeds.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Why is my PNG larger than the original WebP?",
          answer: "PNG uses a different, lossless encoding, while WebP can be highly compressed. A larger output is normal for many photographs.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can I convert an animated WebP to animated PNG?",
          answer: "FixMyImage's current converter draws to a static canvas; it does not preserve animation as APNG. Use an animation-aware workflow if you need every frame.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/avif-to-jpg",
      main_keyword: "avif to jpg",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "observed in India; expanded",
      selected_faqs: [
        {
          question: "How do I change an AVIF file to JPG?",
          answer: "Open the AVIF in a browser that can decode it, then convert and save a JPEG. FixMyImage's current converter fills transparent areas white.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "avif to jpg",
          source_url: "https://www.google.com/search?q=avif%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "What opens AVIF files?",
          answer: "Current major browsers support AVIF, but older versions and some image apps may not. If the file fails to open, try an updated compatible app or browser.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "avif to jpg",
          source_url: "https://www.google.com/search?q=avif%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "What is AVIF vs JPEG?",
          answer: "AVIF is a newer format with efficient compression and possible transparency; JPEG is older and widely compatible but has no alpha transparency.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "avif to jpg",
          source_url: "https://www.google.com/search?q=avif%20to%20jpg&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "What happens to AVIF transparency in JPG?",
          answer: "JPG cannot store transparent pixels. FixMyImage's current converter uses white behind them.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Why does my browser fail to convert an AVIF file?",
          answer: "The source must decode in that browser, and damaged or unsupported AVIF features can fail. FixMyImage reports a decode error when the image cannot load.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/avif-to-png",
      main_keyword: "avif to png",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "not shown in the checked India exact-keyword result",
      selected_faqs: [
        {
          question: "Why convert AVIF to PNG?",
          answer: "PNG is accepted by many editors and can retain transparency. It may be much larger than an efficient AVIF source.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can AVIF transparency be preserved in PNG?",
          answer: "Yes if the browser decodes the alpha channel correctly. FixMyImage's canvas-based PNG export can store those transparent pixels.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Why is the PNG output larger than the AVIF?",
          answer: "PNG is lossless, while AVIF can encode images much more compactly. The change in file size does not mean extra detail was created.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can every browser convert AVIF to PNG?",
          answer: "No guarantee. The browser must first decode the AVIF; support depends on browser version and the file's features.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Will AVIF-to-PNG conversion preserve animation?",
          answer: "FixMyImage's current converter draws to a static canvas and does not export animated PNG. Use a frame-aware converter if motion must be kept.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    },
    {
      route: "/watermark-image",
      main_keyword: "watermark image",
      date_researched: "2026-09-30",
      country_locale_researched: "India / en-IN",
      paa_availability: "observed in India; expanded; irrelevant 'How to get watermark free images?' excluded",
      selected_faqs: [
        {
          question: "What is a watermark image?",
          answer: "A watermarked image has visible text or a graphic overlaid on it, often to identify its creator or brand. The mark does not technically prevent copying.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "watermark image",
          source_url: "https://www.google.com/search?q=watermark%20image&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "How do you watermark a picture?",
          answer: "In FixMyImage's current tool, choose a text or logo mark, set its placement and opacity, then apply it and inspect the exported image.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "watermark image",
          source_url: "https://www.google.com/search?q=watermark%20image&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "How can I create a watermark for my logo?",
          answer: "Use a logo image with a transparent background when possible, then size and place it so the subject remains visible. FixMyImage's current tool accepts a logo file and offers size, position, opacity, and rotation controls.",
          observed_or_proposed: "observed",
          source_type: "Google PAA — observed",
          source_query: "watermark image",
          source_url: "https://www.google.com/search?q=watermark%20image&gl=in&hl=en&pws=0",
          notes: "visible initially"
        },
        {
          question: "Can I add the same watermark to several images?",
          answer: "The current FixMyImage tool applies one watermark configuration to a batch of up to 50 images. Review a few outputs because placement can look different across aspect ratios.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Where should I place a watermark on a photo?",
          answer: "Choose a spot that identifies the image without hiding its important subject. FixMyImage currently offers a nine-position placement grid.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Does a watermark protect my copyright?",
          answer: "A visible watermark may discourage casual reuse or identify a creator, but it does not prevent copying or decide legal ownership.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        },
        {
          question: "Can I change watermark opacity?",
          answer: "Yes. The current FixMyImage tool has an opacity control from 10% to 100%; choose a level that remains legible without dominating the image.",
          observed_or_proposed: "proposed",
          source_type: "Proposed — not observed in Google",
          source_query: null,
          source_url: null,
          notes: "Editorial candidate; verify product behavior before publication."
        }
      ]
    }
  ],
  removed_questions: [
    {
      route: "/compress-image",
      question: "Is JPG or PNG better for a smaller file?",
      answer: "JPG often produces smaller photographic files; PNG is useful for sharp graphics and transparency. The better choice depends on the image and whether you can accept lossy compression.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "overlaps the format-choice FAQ on /convert-image"
    },
    {
      route: "/compress-image",
      question: "Does compressing the same image twice help?",
      answer: "Repeated lossy compression can add artifacts without much extra size reduction. Start from the original and adjust the settings once when possible.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "secondary edge case; weaker than selected task questions"
    },
    {
      route: "/compress-image",
      question: "How can I compare image quality before and after compression?",
      answer: "View both images at the same zoom level, especially around text, edges, and fine textures. Also compare their file sizes in the same units.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "generic workflow question answered by the tool preview"
    },
    {
      route: "/compress-image",
      question: "What is the difference between KB and MB for images?",
      answer: "Both measure file size: an MB is roughly a thousand KB in common upload-limit wording. Check whether the receiving site uses decimal or binary units near a strict cutoff.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "basic unit definition; weaker than task-specific FAQs"
    },
    {
      route: "/compress-image",
      question: "Can compression remove image metadata?",
      answer: "Some export workflows remove EXIF and other metadata, but behavior varies by tool. Check the downloaded file if metadata retention matters.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "metadata retention has not been tested in the deployed product"
    },
    {
      route: "/compress-image-to-10kb",
      question: "What size is 10KB?",
      answer: "10KB is a file-size limit, not a width or height. It is roughly 10,000 bytes in decimal upload-limit wording; the exact cutoff depends on the receiving service.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "image compressor to 10kb",
      source_url: "https://www.google.com/search?q=image%20compressor%20to%2010kb&gl=in&hl=en&pws=0",
      reason: "basic size definition; the extreme-size feasibility answer is more useful"
    },
    {
      route: "/compress-image-to-10kb",
      question: "How to compress a photo to less KB?",
      answer: "Try lowering quality gradually or reducing pixel dimensions, then compare the result with the original. Keep enough detail for the photo's intended use.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "image compressor to 10kb",
      source_url: "https://www.google.com/search?q=image%20compressor%20to%2010kb&gl=in&hl=en&pws=0",
      reason: "broad compression phrasing duplicates the selected 10KB how-to"
    },
    {
      route: "/compress-image-to-10kb",
      question: "Should I crop an image before trying to reach 10KB?",
      answer: "Cropping unneeded background can reduce the amount of information to encode. It may help preserve more detail in the subject at a very small file size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "crop advice is already covered by the selected how-to answer"
    },
    {
      route: "/compress-image-to-10kb",
      question: "Is 10KB the same as 10 pixels?",
      answer: "No. KB measures stored file size; pixels measure image dimensions. A 10KB file can have different dimensions depending on its content and encoding.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "basic KB-versus-pixels definition; less useful here"
    },
    {
      route: "/compress-image-to-10kb",
      question: "Can a transparent PNG fit under 10KB?",
      answer: "A simple small PNG may fit, but detailed or large transparent images often will not. Keep PNG if transparency matters and test the exported size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "niche format edge case; stronger 10KB questions selected"
    },
    {
      route: "/compress-image-to-10kb",
      question: "Why does a 10KB target make text blurry?",
      answer: "Aggressive compression and downscaling remove detail from small letters. Try a tighter crop, a suitable format, or a larger allowed file limit.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "quality-loss variation of the selected feasibility question"
    },
    {
      route: "/compress-image-to-20kb",
      question: "Does a 20KB target change image dimensions?",
      answer: "The 20KB target is a file-size threshold, not a pixel specification. A tool may change dimensions to reach it, so inspect both properties.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-20kb",
      question: "Should I aim for exactly 20KB or below it?",
      answer: "If a site sets 20KB as its maximum, stay below the stated limit to allow for unit differences and validation rules. Exact matching is usually unnecessary.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-20kb",
      question: "Why is my image still above 20KB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-20kb",
      question: "Can I keep the same quality under 20KB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-20kb",
      question: "Is JPG suitable for a 20KB limit?",
      answer: "JPG is often efficient for photos under a 20KB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-20kb",
      question: "Will a PNG fit under 20KB?",
      answer: "A small, simple PNG may fit under 20KB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-20kb",
      question: "What should I check before uploading a 20KB image?",
      answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-20kb",
      question: "When is 20KB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 20KB maximum for very small form uploads. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "How do I reduce my passport to 30KB?",
      answer: "If you mean a passport-style photo, crop it to the required framing, resize to the form's pixel dimensions, then compress and check that facial details remain legible. Follow the receiving authority's exact rules.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "how to compress image to 30kb",
      source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%2030kb&gl=in&hl=en&pws=0",
      reason: "ambiguous 'passport' wording may mean a document rather than a photo"
    },
    {
      route: "/compress-image-to-30kb",
      question: "Does a 30KB target change image dimensions?",
      answer: "The 30KB target is a file-size threshold, not a pixel specification. A tool may change dimensions to reach it, so inspect both properties.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "Should I aim for exactly 30KB or below it?",
      answer: "If a site sets 30KB as its maximum, stay below the stated limit to allow for unit differences and validation rules. Exact matching is usually unnecessary.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "Why is my image still above 30KB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "Can I keep the same quality under 30KB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "Is JPG suitable for a 30KB limit?",
      answer: "JPG is often efficient for photos under a 30KB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "Will a PNG fit under 30KB?",
      answer: "A small, simple PNG may fit under 30KB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "What should I check before uploading a 30KB image?",
      answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-30kb",
      question: "When is 30KB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 30KB maximum for tight application limits. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "Does a 40KB target change image dimensions?",
      answer: "The 40KB target is a file-size threshold, not a pixel specification. A tool may change dimensions to reach it, so inspect both properties.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "Should I aim for exactly 40KB or below it?",
      answer: "If a site sets 40KB as its maximum, stay below the stated limit to allow for unit differences and validation rules. Exact matching is usually unnecessary.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "Why is my image still above 40KB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "Can I keep the same quality under 40KB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "Is JPG suitable for a 40KB limit?",
      answer: "JPG is often efficient for photos under a 40KB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "Will a PNG fit under 40KB?",
      answer: "A small, simple PNG may fit under 40KB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "What should I check before uploading a 40KB image?",
      answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-40kb",
      question: "When is 40KB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 40KB maximum for small document or profile uploads. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-50kb",
      question: "Does a 50KB target change image dimensions?",
      answer: "The 50KB target is a file-size threshold, not a pixel specification. A tool may change dimensions to reach it, so inspect both properties.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-50kb",
      question: "Should I aim for exactly 50KB or below it?",
      answer: "If a site sets 50KB as its maximum, stay below the stated limit to allow for unit differences and validation rules. Exact matching is usually unnecessary.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-50kb",
      question: "Why is my image still above 50KB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-50kb",
      question: "Can I keep the same quality under 50KB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-50kb",
      question: "Is JPG suitable for a 50KB limit?",
      answer: "JPG is often efficient for photos under a 50KB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-50kb",
      question: "Will a PNG fit under 50KB?",
      answer: "A small, simple PNG may fit under 50KB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-50kb",
      question: "When is 50KB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 50KB maximum for common small-upload limits. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-100kb",
      question: "What is 100 KB size?",
      answer: "It is a file-size measurement of roughly 100,000 bytes in decimal usage, not a pixel dimension. Check the receiving site's exact limit.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "how to compress image to 100kb",
      source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%20100kb&gl=in&hl=en&pws=0",
      reason: "basic size definition; weaker than mobile-photo and PNG tasks"
    },
    {
      route: "/compress-image-to-100kb",
      question: "Should I aim for exactly 100KB or below it?",
      answer: "If a site sets 100KB as its maximum, stay below the stated limit to allow for unit differences and validation rules. Exact matching is usually unnecessary.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-100kb",
      question: "Why is my image still above 100KB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-100kb",
      question: "Can I keep the same quality under 100KB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-100kb",
      question: "Is JPG suitable for a 100KB limit?",
      answer: "JPG is often efficient for photos under a 100KB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-100kb",
      question: "Will a PNG fit under 100KB?",
      answer: "A small, simple PNG may fit under 100KB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-100kb",
      question: "What should I check before uploading a 100KB image?",
      answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-100kb",
      question: "When is 100KB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 100KB maximum for moderate upload limits. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-200kb",
      question: "How do I reduce a file to 200KB?",
      answer: "For an image, resize or compress a copy and check the actual saved byte size. Other file types need a suitable tool for their format.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "how to compress image to 200kb",
      source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%20200kb&gl=in&hl=en&pws=0",
      reason: "generic 'file' wording extends beyond image-tool scope"
    },
    {
      route: "/compress-image-to-200kb",
      question: "Why is my image still above 200KB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-200kb",
      question: "Can I keep the same quality under 200KB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-200kb",
      question: "Is JPG suitable for a 200KB limit?",
      answer: "JPG is often efficient for photos under a 200KB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-200kb",
      question: "Will a PNG fit under 200KB?",
      answer: "A small, simple PNG may fit under 200KB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-200kb",
      question: "What should I check before uploading a 200KB image?",
      answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-200kb",
      question: "When is 200KB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 200KB maximum for larger form and web uploads. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-500kb",
      question: "How big is a 500 KB image?",
      answer: "Five hundred KB measures file storage rather than pixel dimensions. The same file size can represent a small detailed image or a larger simple one.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "image compressor to 500kb",
      source_url: "https://www.google.com/search?q=image%20compressor%20to%20500kb&gl=in&hl=en&pws=0",
      reason: "generic file-size definition; limited task value"
    },
    {
      route: "/compress-image-to-500kb",
      question: "How do I reduce a file to 500KB?",
      answer: "For an image, reduce dimensions or adjust its export quality and inspect the saved size. Non-image files require format-specific tools.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "image compressor to 500kb",
      source_url: "https://www.google.com/search?q=image%20compressor%20to%20500kb&gl=in&hl=en&pws=0",
      reason: "generic 'file' wording extends beyond image-tool scope"
    },
    {
      route: "/compress-image-to-500kb",
      question: "Why is my image still above 500KB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-500kb",
      question: "Can I keep the same quality under 500KB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-500kb",
      question: "Is JPG suitable for a 500KB limit?",
      answer: "JPG is often efficient for photos under a 500KB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-500kb",
      question: "Will a PNG fit under 500KB?",
      answer: "A small, simple PNG may fit under 500KB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-500kb",
      question: "What should I check before uploading a 500KB image?",
      answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-500kb",
      question: "When is 500KB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 500KB maximum for website and attachment limits. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-1mb",
      question: "How can I reduce the MB size of a photo?",
      answer: "Crop, resize, or compress a copy, then compare its file size and visible detail. The best change depends on where the photo will be used.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "how to compress image to 1mb",
      source_url: "https://www.google.com/search?q=how%20to%20compress%20image%20to%201mb&gl=in&hl=en&pws=0",
      reason: "broad MB reduction duplicates the selected JPG and PNG questions"
    },
    {
      route: "/compress-image-to-1mb",
      question: "Why is my image still above 1MB after compression?",
      answer: "Its dimensions, detail, metadata, or format may limit further savings. Try a smaller export size or another accepted format, then check quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-1mb",
      question: "Can I keep the same quality under 1MB?",
      answer: "Sometimes, if the original contains redundant data or is much larger than necessary. There is no guarantee; compare the output at its intended display size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-1mb",
      question: "Is JPG suitable for a 1MB limit?",
      answer: "JPG is often efficient for photos under a 1MB cap, but it does not preserve transparency and can blur text or sharp graphics.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-1mb",
      question: "Will a PNG fit under 1MB?",
      answer: "A small, simple PNG may fit under 1MB; a large or detailed one may not. Keep PNG when transparent pixels or crisp graphics matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-1mb",
      question: "What should I check before uploading a 1MB image?",
      answer: "Check the actual saved file size, accepted format, required dimensions, and whether important details remain clear. The receiving service decides whether the file passes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/compress-image-to-1mb",
      question: "When is 1MB an appropriate image limit?",
      answer: "It is appropriate when a destination specifies a 1MB maximum for one-megabyte upload limits. A different destination may require other dimensions, formats, or size limits.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "repetitive target-size template or weaker variation"
    },
    {
      route: "/resize-image",
      question: "What happens when I resize an image?",
      answer: "Resizing changes its pixel width, height, or both. The file size may also change, but it is a separate measurement.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "definition adds little beyond the tool's visible controls"
    },
    {
      route: "/resize-image",
      question: "Can I resize an image for a website without changing its format?",
      answer: "Yes, if the editing tool offers the original format on export. Check the output format and quality setting, because some workflows also re-encode the image.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "format retention depends on output choice; weaker than selected resize tasks"
    },
    {
      route: "/resize-image",
      question: "What do width and height mean in an image resizer?",
      answer: "They are the number of pixels across and down the image. A 1200 × 800 image is 1200 pixels wide and 800 pixels high.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "basic width/height definition; weaker than selected tasks"
    },
    {
      route: "/resize-image",
      question: "How can I keep text readable after resizing?",
      answer: "Avoid shrinking the image below the size at which the text remains legible. Preview it at the actual display size, especially on a phone.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "overlaps the selected blur and aspect-ratio answers"
    },
    {
      route: "/resize-image",
      question: "Does a smaller image always have a smaller file?",
      answer: "Usually fewer pixels help, but format, quality, and metadata also affect file size. Compare the saved output rather than assuming.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "generic file-size issue better handled on compression pages"
    },
    {
      route: "/resize-image-in-pixels",
      question: "Why does changing width also change height?",
      answer: "An aspect-ratio lock keeps the image's shape. Turn it off only when deliberate distortion is acceptable.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "same aspect-ratio issue as the selected distortion question"
    },
    {
      route: "/resize-image-in-pixels",
      question: "Does a 1000-pixel image print at a fixed size?",
      answer: "No. Its physical print size depends on the chosen resolution in pixels per inch and any scaling by the printer.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "print-size topic belongs on /resize-image-in-cm"
    },
    {
      route: "/resize-image-in-pixels",
      question: "What happens if I resize a small image to more pixels?",
      answer: "The software estimates new pixels, but the original detail does not return. The enlarged image may appear soft.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "same enlargement limitation as /resize-image"
    },
    {
      route: "/resize-image-in-pixels",
      question: "Should I use the original image for exact-pixel resizing?",
      answer: "Yes. Repeatedly resizing an already altered copy can make edges and text less clear.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "minor workflow advice; less useful than exact-pixel tasks"
    },
    {
      route: "/resize-image-in-pixels",
      question: "Will exact pixel dimensions guarantee a small file size?",
      answer: "No. A detailed image or lossless format can still create a large file, so check its saved byte size too.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "same file-size issue as the selected pixels-versus-KB question"
    },
    {
      route: "/resize-image-in-cm",
      question: "How do I calculate pixels for a 3 × 4 cm photo?",
      answer: "Multiply each centimeter measurement by the chosen pixels per inch and divide by 2.54. At 300 PPI, 3 × 4 cm is about 354 × 472 pixels.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "second centimeter example duplicates the selected 4.5 × 3.5 cm calculation"
    },
    {
      route: "/resize-image-in-cm",
      question: "Is a 3 × 4 cm photo the same as a 3:4 aspect ratio?",
      answer: "The dimensions have a 3:4 ratio, but the centimeters also specify physical size. The pixel count still depends on the selected PPI.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "overlaps selected aspect and cm-to-pixel explanations"
    },
    {
      route: "/resize-image-in-cm",
      question: "Why does my cm-sized image look different on screen?",
      answer: "Screens display pixels at varying physical densities and zoom levels. A centimeter setting is most meaningful for a controlled print workflow.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "secondary screen-display detail; weaker than print-size tasks"
    },
    {
      route: "/resize-image-in-cm",
      question: "Can I make a 2 × 2 cm image from any photo?",
      answer: "You can crop and resize it, but a low-resolution source may not print sharply. Check the required subject framing and PPI.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "third size example would repeat the calculation pattern"
    },
    {
      route: "/resize-image-in-cm",
      question: "Should I crop before resizing an image in cm?",
      answer: "Yes when the source aspect ratio differs from the target. Cropping preserves shape; stretching changes the subject's proportions.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "crop advice already addressed on /resize-image"
    },
    {
      route: "/bulk-image-resizer",
      question: "What is bulk image resizing?",
      answer: "It applies a dimension change to several images in one workflow. File-count, file-size, and format support depend on the particular tool.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "definition adds little beyond the tool's batch interface"
    },
    {
      route: "/bulk-image-resizer",
      question: "Will bulk resizing overwrite my originals?",
      answer: "That depends on the tool and save workflow. Keep backup originals and inspect where the processed files are saved.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "overwrite behavior has not been tested in a deployed browser session"
    },
    {
      route: "/bulk-image-resizer",
      question: "Can I batch resize images to exact pixels?",
      answer: "Some batch tools offer this, but mixed aspect ratios can stretch unless cropping or padding is configured. Verify the output dimensions and appearance.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "duplicates the selected mixed-orientation and aspect-ratio questions"
    },
    {
      route: "/bulk-image-resizer",
      question: "Does bulk resizing also compress every file?",
      answer: "It may re-encode the files and change their byte sizes, but resizing and compression are different settings. Check the exported quality and sizes.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "generic compression topic; less useful on this route"
    },
    {
      route: "/bulk-image-resizer",
      question: "How should I name files after batch resizing?",
      answer: "Use distinct names or a suffix so you can identify outputs and avoid overwriting originals. Confirm the available naming options in the tool.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "naming workflow is secondary and output naming needs deployed verification"
    },
    {
      route: "/convert-image",
      question: "Can image conversion reduce file size?",
      answer: "It can, depending on the source, destination format, and quality setting. A conversion can also make the file larger, so inspect the output.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "file-size outcome depends on the chosen formats; covered in specific converter routes"
    },
    {
      route: "/convert-image",
      question: "Can I convert an image without changing its width and height?",
      answer: "Yes. FixMyImage's converter draws the source at its original dimensions unless another tool changes the pixels separately.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "minor dimensions reassurance; route-specific format issues are stronger"
    },
    {
      route: "/convert-image",
      question: "Does converting a file extension alone change the image format?",
      answer: "No. Renaming .png to .jpg changes the filename, not the encoded image data. Use a real conversion and verify the resulting file type.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "extension-renaming issue covered on /jpg-to-png and /png-to-jpg"
    },
    {
      route: "/convert-image",
      question: "Are JPG and JPEG different formats?",
      answer: "No. They are two common filename extensions for the same JPEG image format.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "minor terminology question; limited conversion task value"
    },
    {
      route: "/jpg-to-png",
      question: "Will JPG-to-PNG conversion sharpen blurry text?",
      answer: "No. It preserves the visible source at export but cannot reconstruct blurred or compressed text.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "same lost-detail point as the selected lossless-conversion answer"
    },
    {
      route: "/jpg-to-png",
      question: "Can JPG to PNG change image dimensions?",
      answer: "Format conversion alone need not change width or height. The current FixMyImage converter uses the source dimensions.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "dimensions are not a leading JPG-to-PNG concern"
    },
    {
      route: "/jpg-to-png",
      question: "Does PNG support more colors than JPG?",
      answer: "Both can represent full-color photos, but their encoding and transparency capabilities differ. PNG is lossless and can store alpha transparency.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "broad color claim could mislead; transparency and lossless behavior are clearer"
    },
    {
      route: "/jpg-to-png",
      question: "Will converting JPG to PNG remove JPEG artifacts?",
      answer: "No. Blocking or ringing already visible in the JPG remains in the PNG unless separately edited.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "same lost-detail point as the selected lossless-conversion answer"
    },
    {
      route: "/jpg-to-png",
      question: "Can I convert multiple JPG files to PNG together?",
      answer: "The current FixMyImage converter accepts up to 50 images per batch. Review output sizes because PNG versions of photos may be much larger.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "batch capability is covered on /convert-image"
    },
    {
      route: "/png-to-jpg",
      question: "Are PNG and JPG the same?",
      answer: "No. PNG is a lossless format that can store transparency; JPG is a lossy format without transparency.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "png to jpg",
      source_url: "https://www.google.com/search?q=png%20to%20jpg&gl=in&hl=en&pws=0",
      reason: "broad format comparison duplicates more practical selected questions"
    },
    {
      route: "/png-to-jpg",
      question: "Will a PNG-to-JPG conversion reduce file size?",
      answer: "Often for photographs, but not always. The result depends on image detail, dimensions, and the chosen JPEG quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "file-size outcome is uncertain and covered by the selected format-choice answer"
    },
    {
      route: "/png-to-jpg",
      question: "Can a PNG logo become blurry as a JPG?",
      answer: "Yes. JPEG compression can soften sharp edges and text, and transparent areas become white. Keep PNG if crisp edges or transparency matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "sharp-edge loss overlaps the selected PNG-versus-JPEG answer"
    },
    {
      route: "/png-to-jpg",
      question: "Does PNG to JPG change pixel dimensions?",
      answer: "Not by itself. The current FixMyImage converter uses the source image's width and height.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "dimensions are secondary to transparency and encoding behavior"
    },
    {
      route: "/png-to-jpg",
      question: "Can I convert several PNG images to JPG together?",
      answer: "The current FixMyImage converter accepts up to 50 files per batch. Check each JPG if the sources have transparency.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "batch capability is covered on /convert-image"
    },
    {
      route: "/webp-to-jpg",
      question: "Will converting WebP to JPG make the file bigger?",
      answer: "It might. Different encoders and quality settings produce different sizes, so compare the saved files.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "file-size outcome is uncertain and less central than compatibility"
    },
    {
      route: "/webp-to-jpg",
      question: "Does WebP to JPG improve image quality?",
      answer: "No. It can make the file more compatible, but it cannot recover detail missing from the WebP source and may add JPEG loss.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "generic quality-loss point covered on /convert-image"
    },
    {
      route: "/webp-to-jpg",
      question: "Can an animated WebP become an animated JPG?",
      answer: "No. Standard JPG is a still-image format, so animation cannot be preserved in a JPG output.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "animation is a niche edge case and not a WebP-to-JPG core task"
    },
    {
      route: "/webp-to-jpg",
      question: "Can I convert WebP to JPG on a phone browser?",
      answer: "The workflow can run in a browser that supports the source format and canvas export. Performance and memory limits vary by device and file size.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "device workflow is generic and browser-dependent"
    },
    {
      route: "/webp-to-jpg",
      question: "Is WebP the same as WEBM?",
      answer: "No. WebP is an image format; WebM is a media container commonly used for video. The WebP-to-JPG page is for WebP images.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "WEBM is a different format and mostly off-intent"
    },
    {
      route: "/webp-to-png",
      question: "Can WebP to PNG restore lost detail?",
      answer: "No. A lossless PNG preserves the decoded WebP image, but it cannot reconstruct detail discarded when the WebP was created.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "generic lost-detail point covered on /convert-image"
    },
    {
      route: "/webp-to-png",
      question: "Will WebP-to-PNG conversion change the dimensions?",
      answer: "The current FixMyImage converter exports at the source width and height. Check the saved file if exact dimensions matter.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "dimensions are secondary to transparency and output size"
    },
    {
      route: "/webp-to-png",
      question: "Can all browsers read WebP images?",
      answer: "Modern browsers generally support WebP, but behavior can vary by version or device. If the source fails to decode, try a supported browser or another conversion workflow.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "browser compatibility question is stronger on AVIF pages"
    },
    {
      route: "/webp-to-png",
      question: "Can I convert several WebP files to PNG together?",
      answer: "The current FixMyImage converter accepts up to 50 files per batch. Large outputs may use substantial device memory.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "batch capability is covered on /convert-image"
    },
    {
      route: "/webp-to-png",
      question: "Is PNG a better choice for a logo than JPG?",
      answer: "PNG preserves sharp edges and transparency, while JPG does not preserve alpha transparency and can blur edges. Source quality still matters.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "compares PNG with JPG rather than WebP-to-PNG conversion"
    },
    {
      route: "/webp-to-png",
      question: "Is renaming .webp to .png enough?",
      answer: "No. The bytes remain WebP data until they are actually decoded and saved in PNG format.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "extension-renaming issue already covered on other conversion routes"
    },
    {
      route: "/avif-to-jpg",
      question: "What does AVIF stand for?",
      answer: "AVIF means AV1 Image File Format. It is an image format that can support efficient compression, transparency, and other features.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "avif to jpg",
      source_url: "https://www.google.com/search?q=avif%20to%20jpg&gl=in&hl=en&pws=0",
      reason: "acronym definition does not help users complete the conversion"
    },
    {
      route: "/avif-to-jpg",
      question: "Will AVIF to JPG improve compatibility?",
      answer: "Often, because JPEG has broad support in older software. Verify the receiving application accepts JPG and that the converted image looks right.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "compatibility benefit already covered by the opening question"
    },
    {
      route: "/avif-to-jpg",
      question: "Does AVIF-to-JPG conversion preserve HDR or all color detail?",
      answer: "Do not assume it does. Canvas conversion to ordinary JPEG may change color range and bit depth; compare the result before relying on it for color-critical work.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "HDR/color behavior lacks deployed test evidence"
    },
    {
      route: "/avif-to-jpg",
      question: "Will converting AVIF to JPG make it smaller?",
      answer: "Not necessarily. AVIF is often efficient, so a JPEG can be larger at similar apparent quality.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "uncertain file-size comparison; weaker than conversion-failure guidance"
    },
    {
      route: "/avif-to-jpg",
      question: "Can an animated AVIF become an animated JPG?",
      answer: "No. Standard JPEG output is a still image and cannot preserve AVIF animation.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "animation is a niche edge case; not a core JPG conversion question"
    },
    {
      route: "/avif-to-png",
      question: "Will AVIF to PNG improve image quality?",
      answer: "No. PNG preserves the decoded result without new lossy compression, but it cannot restore detail missing from the AVIF source.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "generic lost-detail point covered on /convert-image"
    },
    {
      route: "/avif-to-png",
      question: "Can I convert an AVIF with HDR colors to PNG without changes?",
      answer: "Do not assume so. Browser decoding and canvas export can alter color depth or profile information; inspect color-critical outputs.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "HDR/color behavior lacks deployed test evidence"
    },
    {
      route: "/avif-to-png",
      question: "Does AVIF to PNG keep the same pixels and dimensions?",
      answer: "The current FixMyImage converter uses the source dimensions, but decoding and export may change color representation. Verify the saved file.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "dimensions are secondary to transparency and compatibility"
    },
    {
      route: "/avif-to-png",
      question: "Can a corrupt AVIF file be fixed by converting it?",
      answer: "Usually not. If the browser cannot decode the source, conversion cannot proceed; try obtaining an intact original.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "corrupt-file recovery is off-intent"
    },
    {
      route: "/avif-to-png",
      question: "Can I rename .avif to .png instead of converting?",
      answer: "No. Changing the filename extension leaves the file encoded as AVIF.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "extension-renaming issue covered on other conversion routes"
    },
    {
      route: "/watermark-image",
      question: "What is a watermark?",
      answer: "A watermark is a visible or embedded mark associated with a work. This page's tool creates a visible overlay on images.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "watermark image",
      source_url: "https://www.google.com/search?q=watermark%20image&gl=in&hl=en&pws=0",
      reason: "definition duplicates the selected 'watermark image' question"
    },
    {
      route: "/watermark-image",
      question: "How is a watermark made?",
      answer: "A watermarking tool draws text or a logo over the image and exports a new file. Keep the original unmarked image separately if you may need it later.",
      observed_or_proposed: "observed",
      source_type: "Google PAA — observed",
      source_query: "watermark image",
      source_url: "https://www.google.com/search?q=watermark%20image&gl=in&hl=en&pws=0",
      reason: "process description duplicates the selected how-to question"
    },
    {
      route: "/watermark-image",
      question: "Will watermarking change the image's file size?",
      answer: "It can, because the tool exports a new encoded image. Compare the output file size and appearance with the source.",
      observed_or_proposed: "proposed",
      source_type: "Proposed — not observed in Google",
      source_query: null,
      source_url: null,
      reason: "file-size outcome is a secondary edge case"
    }
  ]
};

/**
 * Returns the exact selected FAQs for a given route formatted for display and JSON-LD.
 * Contains only { q, a } — excludes internal research metadata.
 */
export function getFaqsForRoute(route: string): { q: string; a: string }[] {
  const page = CURATED_FAQ_DATASET.selected_pages.find(p => p.route === route);
  if (!page) return [];
  return page.selected_faqs.map(item => ({
    q: item.question,
    a: item.answer
  }));
}
