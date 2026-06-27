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
    "revision": "460e35b68dae86bced72dbda1e789ed0"
  }, {
    "url": "assets/weight-CQ5Ets4M.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-B9mMgu0B.js",
    "revision": null
  }, {
    "url": "assets/vendor-motion-BV6B0_ur.js",
    "revision": null
  }, {
    "url": "assets/utensils-gbdgkaYA.js",
    "revision": null
  }, {
    "url": "assets/user-BWJWxlOJ.js",
    "revision": null
  }, {
    "url": "assets/useEscapeKey-epIzhsqu.js",
    "revision": null
  }, {
    "url": "assets/useComputedData-Dm8HbKIF.js",
    "revision": null
  }, {
    "url": "assets/useAthleteData-DQQdMkAq.js",
    "revision": null
  }, {
    "url": "assets/useAnalytics-4Ush1MCz.js",
    "revision": null
  }, {
    "url": "assets/trophy-DS6M36TE.js",
    "revision": null
  }, {
    "url": "assets/triangle-alert-DkEHpeRk.js",
    "revision": null
  }, {
    "url": "assets/trending-up-DK3k2lOT.js",
    "revision": null
  }, {
    "url": "assets/trash-2-r8dO1Blo.js",
    "revision": null
  }, {
    "url": "assets/timer-BWp3l1An.js",
    "revision": null
  }, {
    "url": "assets/target-BDREQhTh.js",
    "revision": null
  }, {
    "url": "assets/subDays-CYCXxFCA.js",
    "revision": null
  }, {
    "url": "assets/send-DIEvs4bz.js",
    "revision": null
  }, {
    "url": "assets/search-M3z3TWon.js",
    "revision": null
  }, {
    "url": "assets/save-DeT6Xhl4.js",
    "revision": null
  }, {
    "url": "assets/repeat-Dtj-oMpF.js",
    "revision": null
  }, {
    "url": "assets/play-BgBx-ibH.js",
    "revision": null
  }, {
    "url": "assets/pdf.worker-B4IDxXWI.js",
    "revision": null
  }, {
    "url": "assets/pdf-DfaD4CCm.js",
    "revision": null
  }, {
    "url": "assets/package-B0DJPpGE.js",
    "revision": null
  }, {
    "url": "assets/minus-LhfYcNwx.js",
    "revision": null
  }, {
    "url": "assets/mail-DG9S5FBj.js",
    "revision": null
  }, {
    "url": "assets/list-checks-4D05jlr3.js",
    "revision": null
  }, {
    "url": "assets/layers-CR9j-p1e.js",
    "revision": null
  }, {
    "url": "assets/isToday-D3kIdBf2.js",
    "revision": null
  }, {
    "url": "assets/isSameDay-DbgqWGrV.js",
    "revision": null
  }, {
    "url": "assets/isBefore-D5DXvUX8.js",
    "revision": null
  }, {
    "url": "assets/index-DLQXjM9b.js",
    "revision": null
  }, {
    "url": "assets/index-CS998A7Z.css",
    "revision": null
  }, {
    "url": "assets/heart-pulse-Dnud6SMb.js",
    "revision": null
  }, {
    "url": "assets/heart-CLiQhHR7.js",
    "revision": null
  }, {
    "url": "assets/graphicalItemSelectors-Bo1At-Tl.js",
    "revision": null
  }, {
    "url": "assets/getDay-Dl3bHTy5.js",
    "revision": null
  }, {
    "url": "assets/gauge-Dvu7zdb6.js",
    "revision": null
  }, {
    "url": "assets/formatDistanceToNow-DsmoxPcb.js",
    "revision": null
  }, {
    "url": "assets/flame-CyyCfAos.js",
    "revision": null
  }, {
    "url": "assets/filter-CwCF2q15.js",
    "revision": null
  }, {
    "url": "assets/file-up-WZBwsa4x.js",
    "revision": null
  }, {
    "url": "assets/file-text-CMWicSXZ.js",
    "revision": null
  }, {
    "url": "assets/eye-McWU8jjp.js",
    "revision": null
  }, {
    "url": "assets/endOfMonth-J0Kz-dQP.js",
    "revision": null
  }, {
    "url": "assets/eachDayOfInterval-CTPVxZGP.js",
    "revision": null
  }, {
    "url": "assets/dollar-sign-BICUm4Zy.js",
    "revision": null
  }, {
    "url": "assets/dateUtils-C95TvUfE.js",
    "revision": null
  }, {
    "url": "assets/copy-D7phHyWg.js",
    "revision": null
  }, {
    "url": "assets/constructNow-DplBsIIN.js",
    "revision": null
  }, {
    "url": "assets/clock-BLe391bH.js",
    "revision": null
  }, {
    "url": "assets/circle-x-DXbX43eM.js",
    "revision": null
  }, {
    "url": "assets/circle-check-CqVOUeqQ.js",
    "revision": null
  }, {
    "url": "assets/circle-DD_7i5Ok.js",
    "revision": null
  }, {
    "url": "assets/chevron-up-tKzfO-CB.js",
    "revision": null
  }, {
    "url": "assets/chevron-left-gT5Ooszw.js",
    "revision": null
  }, {
    "url": "assets/camera-CkKlCNy2.js",
    "revision": null
  }, {
    "url": "assets/calendar-qOs871Jo.js",
    "revision": null
  }, {
    "url": "assets/calendar-plus-DZ5vbx_W.js",
    "revision": null
  }, {
    "url": "assets/calendar-days-BuE8i04J.js",
    "revision": null
  }, {
    "url": "assets/blogPosts-BsK7JfEK.js",
    "revision": null
  }, {
    "url": "assets/bell-B-gWx3l-.js",
    "revision": null
  }, {
    "url": "assets/arrow-left-D2nEhdGU.js",
    "revision": null
  }, {
    "url": "assets/archive-CZ0pHPbK.js",
    "revision": null
  }, {
    "url": "assets/addWeeks-BsRP9VUL.js",
    "revision": null
  }, {
    "url": "assets/activity-DiliWra-.js",
    "revision": null
  }, {
    "url": "assets/WorkoutSessionPage-BnBBVQnA.js",
    "revision": null
  }, {
    "url": "assets/WorkoutLogViewer-Cj456txv.js",
    "revision": null
  }, {
    "url": "assets/WorkoutHistoryPage-CVDx_eZk.js",
    "revision": null
  }, {
    "url": "assets/WellnessCheckInsPage-CiQDBRq4.js",
    "revision": null
  }, {
    "url": "assets/WaitlistPage-fylT4rqb.js",
    "revision": null
  }, {
    "url": "assets/UpgradePromptModal-CMyXR2-u.js",
    "revision": null
  }, {
    "url": "assets/TermsPage-CiwotbwR.js",
    "revision": null
  }, {
    "url": "assets/StripeResultModal-zCqb7OFU.js",
    "revision": null
  }, {
    "url": "assets/Skeleton-CnZNgIKE.js",
    "revision": null
  }, {
    "url": "assets/SettingsPage-CHXx5RPj.js",
    "revision": null
  }, {
    "url": "assets/SessionPunchcard-Ce5aiiR0.js",
    "revision": null
  }, {
    "url": "assets/ScheduleSessionModal-DLhIZVY4.js",
    "revision": null
  }, {
    "url": "assets/SchedulePage-CAmCT_Pd.js",
    "revision": null
  }, {
    "url": "assets/ResourcesPage-ARtRdpc8.js",
    "revision": null
  }, {
    "url": "assets/QuickCreateClientForm-Dptaes59.js",
    "revision": null
  }, {
    "url": "assets/ProgressPhotosPage-CtvvH7nn.js",
    "revision": null
  }, {
    "url": "assets/ProgressChartsPage-D8DjaK8b.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlocksPage-CwV1n1Gl.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlockEditorPage-DfyrCO8-.js",
    "revision": null
  }, {
    "url": "assets/PrivacyPage-y5-NUe_u.js",
    "revision": null
  }, {
    "url": "assets/OnboardingModal-ArPbIR1g.js",
    "revision": null
  }, {
    "url": "assets/NutritionPage-Dv-eXq3V.js",
    "revision": null
  }, {
    "url": "assets/NotFoundPage-CcVXThnu.js",
    "revision": null
  }, {
    "url": "assets/MessagesPage-lZeCoFk-.js",
    "revision": null
  }, {
    "url": "assets/MessageThread-D74k6DTd.js",
    "revision": null
  }, {
    "url": "assets/ManagePackageModal-DJQ21ROk.js",
    "revision": null
  }, {
    "url": "assets/ManageClientModal-B890of2W.js",
    "revision": null
  }, {
    "url": "assets/LogSessionModal-BWKqixQL.js",
    "revision": null
  }, {
    "url": "assets/LineChart-lguEy9aY.js",
    "revision": null
  }, {
    "url": "assets/InviteAcceptPage-WurNULIK.js",
    "revision": null
  }, {
    "url": "assets/HabitTrackingPage-DdMHFDpl.js",
    "revision": null
  }, {
    "url": "assets/GymsPage-BnRFVpez.js",
    "revision": null
  }, {
    "url": "assets/GymFeedPage-C1ZU4ZRB.js",
    "revision": null
  }, {
    "url": "assets/GhostDrafterModal-Cv8jsO0H.js",
    "revision": null
  }, {
    "url": "assets/ExportModal-BuPloBIa.js",
    "revision": null
  }, {
    "url": "assets/ExerciseLibraryPage-Bo4RqOD4.js",
    "revision": null
  }, {
    "url": "assets/EmptyState-CIZCubC2.js",
    "revision": null
  }, {
    "url": "assets/EmailLoginPage-CXl_e7lm.js",
    "revision": null
  }, {
    "url": "assets/DinoQuizPage-DC1ja5RT.js",
    "revision": null
  }, {
    "url": "assets/DayDetail-Df6HvNNI.js",
    "revision": null
  }, {
    "url": "assets/CsvClientImportModal-CMA2O36e.js",
    "revision": null
  }, {
    "url": "assets/ContactTimeline-CEF-WbRE.js",
    "revision": null
  }, {
    "url": "assets/CommandPalette-DQIJ_pDb.js",
    "revision": null
  }, {
    "url": "assets/CoachSettingsModal-jG_0Y88L.js",
    "revision": null
  }, {
    "url": "assets/CoachMessagesPage-DngKWgZG.js",
    "revision": null
  }, {
    "url": "assets/ClientsListPage-B_Ohh63m.js",
    "revision": null
  }, {
    "url": "assets/ClientRouteSync-rrqARb9w.js",
    "revision": null
  }, {
    "url": "assets/ClientDashboard-BLNs-bHD.js",
    "revision": null
  }, {
    "url": "assets/ChecklistPage-Dos_1P2O.js",
    "revision": null
  }, {
    "url": "assets/Card-CyoNWCLk.js",
    "revision": null
  }, {
    "url": "assets/Button-BRYolhEK.js",
    "revision": null
  }, {
    "url": "assets/BulkImportModal-CrMywIUB.js",
    "revision": null
  }, {
    "url": "assets/BlogPostPage-BrKKIYSK.js",
    "revision": null
  }, {
    "url": "assets/BlogListPage-BRWCL-c6.js",
    "revision": null
  }, {
    "url": "assets/AthleteOnboardingModal-fC8TvNHZ.js",
    "revision": null
  }, {
    "url": "assets/AthleteLayout-CbTTPHB4.js",
    "revision": null
  }, {
    "url": "assets/AthleteGymPerformancePage-9SyQs5bA.js",
    "revision": null
  }, {
    "url": "assets/AthleteDashboard-BGnEfjVY.js",
    "revision": null
  }, {
    "url": "assets/AnnouncementsPage-BMN-XJz7.js",
    "revision": null
  }, {
    "url": "assets/AnimatedModal-D9LZYdr9.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsPanel-Cosfejva.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsDashboardPage-Cq5kGmvF.js",
    "revision": null
  }, {
    "url": "assets/AiPromptsPage-Dlw8sjqU.js",
    "revision": null
  }, {
    "url": "assets/AiProgramModal-CiBVzZea.js",
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
