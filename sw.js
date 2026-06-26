/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-2ae722a1'], (function (workbox) { 'use strict';

  importScripts("/push-sw.js");
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "push-sw.js",
    "revision": "6aaf43a635f5c7c3f5a625cedff4a5ce"
  }, {
    "url": "og-image.png",
    "revision": "d97658dfc0850c820abdf0cdef2e917c"
  }, {
    "url": "logo.png",
    "revision": "9df985c28c53d36d2540372db65777a9"
  }, {
    "url": "index.html",
    "revision": "0cbaf214b76f7c72eef12d3f4e902ed0"
  }, {
    "url": "assets/weight-DM0yAH72.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-B9mMgu0B.js",
    "revision": null
  }, {
    "url": "assets/vendor-motion-BV6B0_ur.js",
    "revision": null
  }, {
    "url": "assets/utensils-DeCYs9Az.js",
    "revision": null
  }, {
    "url": "assets/user-BQGvTHnw.js",
    "revision": null
  }, {
    "url": "assets/useEscapeKey-epIzhsqu.js",
    "revision": null
  }, {
    "url": "assets/useComputedData-Cutdrnlc.js",
    "revision": null
  }, {
    "url": "assets/useAthleteData-JTz_uTaU.js",
    "revision": null
  }, {
    "url": "assets/useAnalytics-CJuZ5ozi.js",
    "revision": null
  }, {
    "url": "assets/trophy-BpFJtkzS.js",
    "revision": null
  }, {
    "url": "assets/triangle-alert-DsG484W5.js",
    "revision": null
  }, {
    "url": "assets/trending-up-Qi9T85Xl.js",
    "revision": null
  }, {
    "url": "assets/trash-2-C3PThgDa.js",
    "revision": null
  }, {
    "url": "assets/timer-Drs0ylMv.js",
    "revision": null
  }, {
    "url": "assets/target-i8M8kY4G.js",
    "revision": null
  }, {
    "url": "assets/subDays-BL4GL6d8.js",
    "revision": null
  }, {
    "url": "assets/send-ByeDzF8L.js",
    "revision": null
  }, {
    "url": "assets/search-BGzvMdzX.js",
    "revision": null
  }, {
    "url": "assets/save-DrgB1v9r.js",
    "revision": null
  }, {
    "url": "assets/repeat-CJQoVLJ2.js",
    "revision": null
  }, {
    "url": "assets/play-CdLqNl5S.js",
    "revision": null
  }, {
    "url": "assets/pdf.worker-B4IDxXWI.js",
    "revision": null
  }, {
    "url": "assets/pdf-DfaD4CCm.js",
    "revision": null
  }, {
    "url": "assets/package-BV-eXk_y.js",
    "revision": null
  }, {
    "url": "assets/minus-BFk4XshV.js",
    "revision": null
  }, {
    "url": "assets/mail-4OafqD0O.js",
    "revision": null
  }, {
    "url": "assets/list-checks-4BSJkCtF.js",
    "revision": null
  }, {
    "url": "assets/layers-CjBnek-E.js",
    "revision": null
  }, {
    "url": "assets/isToday-DSOXGEfq.js",
    "revision": null
  }, {
    "url": "assets/isSameDay-DKsOF5D9.js",
    "revision": null
  }, {
    "url": "assets/isBefore-B0I0FHQa.js",
    "revision": null
  }, {
    "url": "assets/index-Dx47JONB.css",
    "revision": null
  }, {
    "url": "assets/index-BHyztGfE.js",
    "revision": null
  }, {
    "url": "assets/heart-pulse-BjY2NV4Z.js",
    "revision": null
  }, {
    "url": "assets/heart-CNV2eY8l.js",
    "revision": null
  }, {
    "url": "assets/graphicalItemSelectors-B4y--hnK.js",
    "revision": null
  }, {
    "url": "assets/getDay-Ddj89GDO.js",
    "revision": null
  }, {
    "url": "assets/gauge-Dbnxdyxk.js",
    "revision": null
  }, {
    "url": "assets/formatDistanceToNow-BJaebu_V.js",
    "revision": null
  }, {
    "url": "assets/flame-C0Jl72lw.js",
    "revision": null
  }, {
    "url": "assets/filter-Bh95XSaq.js",
    "revision": null
  }, {
    "url": "assets/file-up-CxgOlDQU.js",
    "revision": null
  }, {
    "url": "assets/file-text-DjYzWf2V.js",
    "revision": null
  }, {
    "url": "assets/eye-DvDVKoqt.js",
    "revision": null
  }, {
    "url": "assets/endOfMonth-B_vWOEXN.js",
    "revision": null
  }, {
    "url": "assets/eachDayOfInterval-uc2ZQwz3.js",
    "revision": null
  }, {
    "url": "assets/dollar-sign-CZ4rsNoX.js",
    "revision": null
  }, {
    "url": "assets/dateUtils-BZL1sa8b.js",
    "revision": null
  }, {
    "url": "assets/copy-BnJBdJZ0.js",
    "revision": null
  }, {
    "url": "assets/constructNow-Cs_1zGJ1.js",
    "revision": null
  }, {
    "url": "assets/clock-DOU4TPTD.js",
    "revision": null
  }, {
    "url": "assets/circle-x-CvMZsBff.js",
    "revision": null
  }, {
    "url": "assets/circle-check-DncPNQGM.js",
    "revision": null
  }, {
    "url": "assets/circle-C8Vgb9fe.js",
    "revision": null
  }, {
    "url": "assets/chevron-up-DNHnShP0.js",
    "revision": null
  }, {
    "url": "assets/chevron-left-Ch-VLx1i.js",
    "revision": null
  }, {
    "url": "assets/camera-CL5vckQ0.js",
    "revision": null
  }, {
    "url": "assets/calendar-plus-DrK3FElq.js",
    "revision": null
  }, {
    "url": "assets/calendar-days-CaMOjVf-.js",
    "revision": null
  }, {
    "url": "assets/calendar-DB57t6Bu.js",
    "revision": null
  }, {
    "url": "assets/blogPosts-BsK7JfEK.js",
    "revision": null
  }, {
    "url": "assets/bell-BeQ6upst.js",
    "revision": null
  }, {
    "url": "assets/arrow-left-CG3bU-Vg.js",
    "revision": null
  }, {
    "url": "assets/archive-BOFjw6QF.js",
    "revision": null
  }, {
    "url": "assets/addWeeks-3ib6VUhH.js",
    "revision": null
  }, {
    "url": "assets/activity-BFhHUpJ7.js",
    "revision": null
  }, {
    "url": "assets/WorkoutSessionPage-BHrNIleg.js",
    "revision": null
  }, {
    "url": "assets/WorkoutLogViewer-9fz8nVRA.js",
    "revision": null
  }, {
    "url": "assets/WorkoutHistoryPage-cVpFJ2AM.js",
    "revision": null
  }, {
    "url": "assets/WellnessCheckInsPage-BKiq4PKW.js",
    "revision": null
  }, {
    "url": "assets/WaitlistPage-BVs4wkPm.js",
    "revision": null
  }, {
    "url": "assets/UpgradePromptModal-5j8Rw1g1.js",
    "revision": null
  }, {
    "url": "assets/TermsPage-DV8rCFFw.js",
    "revision": null
  }, {
    "url": "assets/StripeResultModal-jlVH75cA.js",
    "revision": null
  }, {
    "url": "assets/Skeleton-Czmkydxf.js",
    "revision": null
  }, {
    "url": "assets/SettingsPage-Ctl0nePZ.js",
    "revision": null
  }, {
    "url": "assets/SessionPunchcard-CvYAdgPj.js",
    "revision": null
  }, {
    "url": "assets/ScheduleSessionModal-Dgc1alo0.js",
    "revision": null
  }, {
    "url": "assets/SchedulePage-CzrwBSvs.js",
    "revision": null
  }, {
    "url": "assets/ResourcesPage-Caif3d4H.js",
    "revision": null
  }, {
    "url": "assets/QuickCreateClientForm-Cw8w0tbT.js",
    "revision": null
  }, {
    "url": "assets/ProgressPhotosPage-xx01h5sR.js",
    "revision": null
  }, {
    "url": "assets/ProgressChartsPage-CqXmgGnP.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlocksPage-BpS5dAxm.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlockEditorPage-Ci7ciRtY.js",
    "revision": null
  }, {
    "url": "assets/PrivacyPage-Bx7JJKxc.js",
    "revision": null
  }, {
    "url": "assets/OnboardingModal-zBH1b8yU.js",
    "revision": null
  }, {
    "url": "assets/NutritionPage-PRv9BC5e.js",
    "revision": null
  }, {
    "url": "assets/NotFoundPage-kYDTo4Bx.js",
    "revision": null
  }, {
    "url": "assets/MessagesPage-ITEvAMCI.js",
    "revision": null
  }, {
    "url": "assets/MessageThread-ByCOI4bH.js",
    "revision": null
  }, {
    "url": "assets/ManagePackageModal-BCpJr52L.js",
    "revision": null
  }, {
    "url": "assets/ManageClientModal-BAPTsA2a.js",
    "revision": null
  }, {
    "url": "assets/LogSessionModal-BcjK5jKM.js",
    "revision": null
  }, {
    "url": "assets/LineChart-Brpw-fqI.js",
    "revision": null
  }, {
    "url": "assets/InviteAcceptPage-BXZlYyeE.js",
    "revision": null
  }, {
    "url": "assets/HabitTrackingPage-1OUGxTPh.js",
    "revision": null
  }, {
    "url": "assets/GymsPage-BKIRBtOt.js",
    "revision": null
  }, {
    "url": "assets/GymFeedPage-2XONn7wL.js",
    "revision": null
  }, {
    "url": "assets/GhostDrafterModal-COWY4o1R.js",
    "revision": null
  }, {
    "url": "assets/ExportModal-CCrPm9L6.js",
    "revision": null
  }, {
    "url": "assets/ExerciseLibraryPage-Bc2jVaoD.js",
    "revision": null
  }, {
    "url": "assets/EmptyState-mEZ6WKmS.js",
    "revision": null
  }, {
    "url": "assets/EmailLoginPage-Dgz0AFub.js",
    "revision": null
  }, {
    "url": "assets/DinoQuizPage-lX_PKKzz.js",
    "revision": null
  }, {
    "url": "assets/DayDetail-NS9qw-aw.js",
    "revision": null
  }, {
    "url": "assets/CsvClientImportModal-BvMk458B.js",
    "revision": null
  }, {
    "url": "assets/ContactTimeline-BG6p-nr0.js",
    "revision": null
  }, {
    "url": "assets/CommandPalette-oi2jFJ8h.js",
    "revision": null
  }, {
    "url": "assets/CoachSettingsModal-DpO_heIc.js",
    "revision": null
  }, {
    "url": "assets/CoachMessagesPage-CTQZtb7X.js",
    "revision": null
  }, {
    "url": "assets/ClientsListPage-CsVMH-Q8.js",
    "revision": null
  }, {
    "url": "assets/ClientRouteSync-Ds7SC6Mg.js",
    "revision": null
  }, {
    "url": "assets/ClientDashboard-Bwa-_bQs.js",
    "revision": null
  }, {
    "url": "assets/ChecklistPage-DezxWsUz.js",
    "revision": null
  }, {
    "url": "assets/Card-tUKCj_5C.js",
    "revision": null
  }, {
    "url": "assets/Button-Cq9MFc9v.js",
    "revision": null
  }, {
    "url": "assets/BulkImportModal-CkujQ0nn.js",
    "revision": null
  }, {
    "url": "assets/BlogPostPage-BhdhbI4M.js",
    "revision": null
  }, {
    "url": "assets/BlogListPage-DlCQQaxn.js",
    "revision": null
  }, {
    "url": "assets/AthleteOnboardingModal-D-OO6uBi.js",
    "revision": null
  }, {
    "url": "assets/AthleteLayout-C8tUC8nf.js",
    "revision": null
  }, {
    "url": "assets/AthleteGymPerformancePage-DkaXzhAV.js",
    "revision": null
  }, {
    "url": "assets/AthleteDashboard-BME28IYm.js",
    "revision": null
  }, {
    "url": "assets/AnnouncementsPage-EhVb65yW.js",
    "revision": null
  }, {
    "url": "assets/AnimatedModal-u3YMJ06x.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsPanel-Rc0jibvI.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsDashboardPage-COfmy_Ry.js",
    "revision": null
  }, {
    "url": "assets/AiPromptsPage-D1_AuKpi.js",
    "revision": null
  }, {
    "url": "assets/AiProgramModal-Bzl9A4uL.js",
    "revision": null
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/^\/api\//, /\/assets\/.*\.js$/, /\/assets\/.*\.css$/]
  }));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    })]
  }), 'GET');

}));
