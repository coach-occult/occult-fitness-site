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
    "revision": "111ba80fe2029f9c954c0b43a2ec433d"
  }, {
    "url": "assets/weight-BJ-VCiHt.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-B9mMgu0B.js",
    "revision": null
  }, {
    "url": "assets/vendor-motion-BV6B0_ur.js",
    "revision": null
  }, {
    "url": "assets/utensils-D32Rsswi.js",
    "revision": null
  }, {
    "url": "assets/user-BnGHuXO-.js",
    "revision": null
  }, {
    "url": "assets/useEscapeKey-epIzhsqu.js",
    "revision": null
  }, {
    "url": "assets/useComputedData-DZe3RXqK.js",
    "revision": null
  }, {
    "url": "assets/useAthleteData-CGPswNmP.js",
    "revision": null
  }, {
    "url": "assets/useAnalytics-Bak-vSHD.js",
    "revision": null
  }, {
    "url": "assets/trophy-DInxWA2Y.js",
    "revision": null
  }, {
    "url": "assets/triangle-alert-hRulin4T.js",
    "revision": null
  }, {
    "url": "assets/trending-up-D4ynspiH.js",
    "revision": null
  }, {
    "url": "assets/trash-2-PKtzt_Bk.js",
    "revision": null
  }, {
    "url": "assets/timer-P2lsHkes.js",
    "revision": null
  }, {
    "url": "assets/target-Dllf5Dm4.js",
    "revision": null
  }, {
    "url": "assets/subDays-BTugrCVC.js",
    "revision": null
  }, {
    "url": "assets/send-BiuRnoGZ.js",
    "revision": null
  }, {
    "url": "assets/search-DO6wzd7L.js",
    "revision": null
  }, {
    "url": "assets/save-BkouVRNR.js",
    "revision": null
  }, {
    "url": "assets/repeat-4C8pKlS8.js",
    "revision": null
  }, {
    "url": "assets/play-Dc3vySfu.js",
    "revision": null
  }, {
    "url": "assets/pdf.worker-B4IDxXWI.js",
    "revision": null
  }, {
    "url": "assets/pdf-DfaD4CCm.js",
    "revision": null
  }, {
    "url": "assets/package-BAqL-eVa.js",
    "revision": null
  }, {
    "url": "assets/minus-Cpvq64SW.js",
    "revision": null
  }, {
    "url": "assets/mail-CJoTPdYk.js",
    "revision": null
  }, {
    "url": "assets/list-checks-1Q1rGCxD.js",
    "revision": null
  }, {
    "url": "assets/layers-CCl1Snep.js",
    "revision": null
  }, {
    "url": "assets/isToday-DODBQ7h4.js",
    "revision": null
  }, {
    "url": "assets/isSameDay-CJDukzav.js",
    "revision": null
  }, {
    "url": "assets/isBefore-C52bgDwD.js",
    "revision": null
  }, {
    "url": "assets/index-DOH4aGvt.js",
    "revision": null
  }, {
    "url": "assets/index-7E0ryrcy.css",
    "revision": null
  }, {
    "url": "assets/heart-pulse-DzFAXVxt.js",
    "revision": null
  }, {
    "url": "assets/heart-k2he1zMS.js",
    "revision": null
  }, {
    "url": "assets/graphicalItemSelectors-DqlTABOs.js",
    "revision": null
  }, {
    "url": "assets/getDay-tH3B2Olf.js",
    "revision": null
  }, {
    "url": "assets/gauge-B6jjHMrM.js",
    "revision": null
  }, {
    "url": "assets/formatDistanceToNow-LB1KBms9.js",
    "revision": null
  }, {
    "url": "assets/flame-Dj8aEX_B.js",
    "revision": null
  }, {
    "url": "assets/filter-Cy0Aob3Q.js",
    "revision": null
  }, {
    "url": "assets/file-up-Cp0DLjmt.js",
    "revision": null
  }, {
    "url": "assets/file-text-Bm0WNknu.js",
    "revision": null
  }, {
    "url": "assets/eye-Dk5IZ5jt.js",
    "revision": null
  }, {
    "url": "assets/endOfMonth-CNk4aQ4w.js",
    "revision": null
  }, {
    "url": "assets/eachDayOfInterval-Bwy7Ooih.js",
    "revision": null
  }, {
    "url": "assets/dollar-sign-hJhylBF-.js",
    "revision": null
  }, {
    "url": "assets/dateUtils-BaUiD1mA.js",
    "revision": null
  }, {
    "url": "assets/copy-D7KqE6mG.js",
    "revision": null
  }, {
    "url": "assets/constructNow-B_-fai-x.js",
    "revision": null
  }, {
    "url": "assets/clock-C4Dav8Nc.js",
    "revision": null
  }, {
    "url": "assets/circle-x-BzrZ1Hu2.js",
    "revision": null
  }, {
    "url": "assets/circle-check-BSqSr9H-.js",
    "revision": null
  }, {
    "url": "assets/circle-CBbcfLLr.js",
    "revision": null
  }, {
    "url": "assets/chevron-up-C3CL-eC_.js",
    "revision": null
  }, {
    "url": "assets/chevron-left-DOOWsIny.js",
    "revision": null
  }, {
    "url": "assets/camera-dnQsXzY5.js",
    "revision": null
  }, {
    "url": "assets/calendar-plus-DlWD505X.js",
    "revision": null
  }, {
    "url": "assets/calendar-days-BtdDm7JC.js",
    "revision": null
  }, {
    "url": "assets/calendar-BmKfFv43.js",
    "revision": null
  }, {
    "url": "assets/blogPosts-BsK7JfEK.js",
    "revision": null
  }, {
    "url": "assets/bell-A5-htJqJ.js",
    "revision": null
  }, {
    "url": "assets/arrow-left-DBGeThc6.js",
    "revision": null
  }, {
    "url": "assets/archive-D8uvTRbZ.js",
    "revision": null
  }, {
    "url": "assets/addWeeks-CilfCmKk.js",
    "revision": null
  }, {
    "url": "assets/activity-DUFF79zB.js",
    "revision": null
  }, {
    "url": "assets/WorkoutSessionPage-B124RG6W.js",
    "revision": null
  }, {
    "url": "assets/WorkoutLogViewer-BKUQYIIQ.js",
    "revision": null
  }, {
    "url": "assets/WorkoutHistoryPage-oTv1_Oic.js",
    "revision": null
  }, {
    "url": "assets/WellnessCheckInsPage-Bau2qy1R.js",
    "revision": null
  }, {
    "url": "assets/WaitlistPage-CU6lYlqo.js",
    "revision": null
  }, {
    "url": "assets/UpgradePromptModal-BZb7VvV_.js",
    "revision": null
  }, {
    "url": "assets/TermsPage-CzKdqHcH.js",
    "revision": null
  }, {
    "url": "assets/StripeResultModal-D35M70H6.js",
    "revision": null
  }, {
    "url": "assets/Skeleton-HTm1Cggh.js",
    "revision": null
  }, {
    "url": "assets/SettingsPage-CuejAlM9.js",
    "revision": null
  }, {
    "url": "assets/SessionPunchcard-B6GyLUl3.js",
    "revision": null
  }, {
    "url": "assets/ScheduleSessionModal-DfTsTcDB.js",
    "revision": null
  }, {
    "url": "assets/SchedulePage-D1x3GXj0.js",
    "revision": null
  }, {
    "url": "assets/ResourcesPage-DptU0Fq6.js",
    "revision": null
  }, {
    "url": "assets/QuickCreateClientForm-BBTb0tsS.js",
    "revision": null
  }, {
    "url": "assets/ProgressPhotosPage-C8uo3nke.js",
    "revision": null
  }, {
    "url": "assets/ProgressChartsPage-BzQZG5gI.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlocksPage-B-3-Zqn_.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlockEditorPage-XkcA0GEN.js",
    "revision": null
  }, {
    "url": "assets/PrivacyPage-BhEO6426.js",
    "revision": null
  }, {
    "url": "assets/OnboardingModal-CJYEt-Jt.js",
    "revision": null
  }, {
    "url": "assets/NutritionPage-CuyoAGQy.js",
    "revision": null
  }, {
    "url": "assets/NotFoundPage-BvkimixW.js",
    "revision": null
  }, {
    "url": "assets/MessagesPage-BBaB8VJh.js",
    "revision": null
  }, {
    "url": "assets/MessageThread-UZMQw-ix.js",
    "revision": null
  }, {
    "url": "assets/ManagePackageModal-C4MkgxtY.js",
    "revision": null
  }, {
    "url": "assets/ManageClientModal-hh9IDcbi.js",
    "revision": null
  }, {
    "url": "assets/LogSessionModal-5LIdIWAU.js",
    "revision": null
  }, {
    "url": "assets/LineChart-DWdYgFPY.js",
    "revision": null
  }, {
    "url": "assets/InviteAcceptPage-5sSal__z.js",
    "revision": null
  }, {
    "url": "assets/HabitTrackingPage-BP4R3NYi.js",
    "revision": null
  }, {
    "url": "assets/GymsPage-CChnSJnq.js",
    "revision": null
  }, {
    "url": "assets/GymFeedPage-CJqsJxAU.js",
    "revision": null
  }, {
    "url": "assets/GhostDrafterModal-LIyBx5rW.js",
    "revision": null
  }, {
    "url": "assets/ExportModal-Dk1qV088.js",
    "revision": null
  }, {
    "url": "assets/ExerciseLibraryPage-BCigEXaD.js",
    "revision": null
  }, {
    "url": "assets/EmptyState-CTDaCZG4.js",
    "revision": null
  }, {
    "url": "assets/EmailLoginPage-WdfvA-Aw.js",
    "revision": null
  }, {
    "url": "assets/DinoQuizPage-DELto0KP.js",
    "revision": null
  }, {
    "url": "assets/DayDetail-Dh35Lg0T.js",
    "revision": null
  }, {
    "url": "assets/CsvClientImportModal-BJarC7rY.js",
    "revision": null
  }, {
    "url": "assets/ContactTimeline-OtaRqSnq.js",
    "revision": null
  }, {
    "url": "assets/CommandPalette-AoZ5EC6V.js",
    "revision": null
  }, {
    "url": "assets/CoachSettingsModal-Dx2Pq74-.js",
    "revision": null
  }, {
    "url": "assets/CoachMessagesPage-BKU9SMnP.js",
    "revision": null
  }, {
    "url": "assets/ClientsListPage-DviAubvx.js",
    "revision": null
  }, {
    "url": "assets/ClientRouteSync-oP9fyI_m.js",
    "revision": null
  }, {
    "url": "assets/ClientDashboard-lSHnLT26.js",
    "revision": null
  }, {
    "url": "assets/ChecklistPage-C00cxrFa.js",
    "revision": null
  }, {
    "url": "assets/Card-D5My_CyB.js",
    "revision": null
  }, {
    "url": "assets/Button-CS30Cgd1.js",
    "revision": null
  }, {
    "url": "assets/BulkImportModal-BLXeJJbM.js",
    "revision": null
  }, {
    "url": "assets/BlogPostPage-D0EfbE2e.js",
    "revision": null
  }, {
    "url": "assets/BlogListPage-3m7nUZCV.js",
    "revision": null
  }, {
    "url": "assets/AthleteOnboardingModal-B_dTZPiO.js",
    "revision": null
  }, {
    "url": "assets/AthleteLayout-C5xWq9Tt.js",
    "revision": null
  }, {
    "url": "assets/AthleteGymPerformancePage-DLdrcVce.js",
    "revision": null
  }, {
    "url": "assets/AthleteDashboard-BTJ2gVGQ.js",
    "revision": null
  }, {
    "url": "assets/AnnouncementsPage-BDSObtdy.js",
    "revision": null
  }, {
    "url": "assets/AnimatedModal-DVIjNeCt.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsPanel-BhmhS1gB.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsDashboardPage-W3mhLPuS.js",
    "revision": null
  }, {
    "url": "assets/AiPromptsPage-CIXSdfgo.js",
    "revision": null
  }, {
    "url": "assets/AiProgramModal-CeGkFy06.js",
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
