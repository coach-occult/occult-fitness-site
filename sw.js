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
    "revision": "03c9cf679d372cca4a13a372841d0bb3"
  }, {
    "url": "assets/weight-DKz3yVEd.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-B9mMgu0B.js",
    "revision": null
  }, {
    "url": "assets/vendor-motion-BV6B0_ur.js",
    "revision": null
  }, {
    "url": "assets/utensils-YVjiY7iP.js",
    "revision": null
  }, {
    "url": "assets/user-FVDgRVvX.js",
    "revision": null
  }, {
    "url": "assets/useEscapeKey-epIzhsqu.js",
    "revision": null
  }, {
    "url": "assets/useComputedData-BA9wSpPG.js",
    "revision": null
  }, {
    "url": "assets/useAthleteData-Dj5eUg_b.js",
    "revision": null
  }, {
    "url": "assets/useAnalytics-CWBGDgRY.js",
    "revision": null
  }, {
    "url": "assets/trophy-BA0EDclo.js",
    "revision": null
  }, {
    "url": "assets/triangle-alert-CTYQjV1a.js",
    "revision": null
  }, {
    "url": "assets/trending-up-ChLKumNG.js",
    "revision": null
  }, {
    "url": "assets/trash-2-Cb3hfFzW.js",
    "revision": null
  }, {
    "url": "assets/timer-D3hhgEvB.js",
    "revision": null
  }, {
    "url": "assets/target-CPivZG3C.js",
    "revision": null
  }, {
    "url": "assets/subDays-CfVl-DEr.js",
    "revision": null
  }, {
    "url": "assets/send-C-z1US8h.js",
    "revision": null
  }, {
    "url": "assets/search-lp4mWtdH.js",
    "revision": null
  }, {
    "url": "assets/save-CEjABTed.js",
    "revision": null
  }, {
    "url": "assets/repeat-QVNIr_ZS.js",
    "revision": null
  }, {
    "url": "assets/play-D85gpjHH.js",
    "revision": null
  }, {
    "url": "assets/pdf.worker-B4IDxXWI.js",
    "revision": null
  }, {
    "url": "assets/pdf-DfaD4CCm.js",
    "revision": null
  }, {
    "url": "assets/package-CyqQMutA.js",
    "revision": null
  }, {
    "url": "assets/minus-C0ZYjunu.js",
    "revision": null
  }, {
    "url": "assets/mail-DSJs7Mx9.js",
    "revision": null
  }, {
    "url": "assets/list-checks-B0A-fLx4.js",
    "revision": null
  }, {
    "url": "assets/layers-DYJTRvyX.js",
    "revision": null
  }, {
    "url": "assets/isToday-CwnhD6Uh.js",
    "revision": null
  }, {
    "url": "assets/isSameDay-Cb1Tns1X.js",
    "revision": null
  }, {
    "url": "assets/isBefore-DOBLhS1r.js",
    "revision": null
  }, {
    "url": "assets/index-BmDvmkoO.js",
    "revision": null
  }, {
    "url": "assets/index-7E0ryrcy.css",
    "revision": null
  }, {
    "url": "assets/heart-pulse-D-a1kQot.js",
    "revision": null
  }, {
    "url": "assets/heart-BOWB23h-.js",
    "revision": null
  }, {
    "url": "assets/graphicalItemSelectors-BUbr7fXX.js",
    "revision": null
  }, {
    "url": "assets/getDay-D0csKxJh.js",
    "revision": null
  }, {
    "url": "assets/gauge-CfBpRlFw.js",
    "revision": null
  }, {
    "url": "assets/formatDistanceToNow-CQX22zZA.js",
    "revision": null
  }, {
    "url": "assets/flame-DM0_uAsB.js",
    "revision": null
  }, {
    "url": "assets/filter-DJIKs3tG.js",
    "revision": null
  }, {
    "url": "assets/file-up-gnx2e0-z.js",
    "revision": null
  }, {
    "url": "assets/file-text-Bd1a74QI.js",
    "revision": null
  }, {
    "url": "assets/eye-Dsu2vqhi.js",
    "revision": null
  }, {
    "url": "assets/endOfMonth-7HUIdYyE.js",
    "revision": null
  }, {
    "url": "assets/eachDayOfInterval-iJtXpWV9.js",
    "revision": null
  }, {
    "url": "assets/dollar-sign-DeX9ssma.js",
    "revision": null
  }, {
    "url": "assets/dateUtils-Khstceon.js",
    "revision": null
  }, {
    "url": "assets/copy-DaURjpB2.js",
    "revision": null
  }, {
    "url": "assets/constructNow-F-J7Xj0L.js",
    "revision": null
  }, {
    "url": "assets/clock-CPZ73tQa.js",
    "revision": null
  }, {
    "url": "assets/circle-x-hexws6dm.js",
    "revision": null
  }, {
    "url": "assets/circle-check-Bd6StYdn.js",
    "revision": null
  }, {
    "url": "assets/circle-CFZi-Lh4.js",
    "revision": null
  }, {
    "url": "assets/chevron-up-BADhkhQC.js",
    "revision": null
  }, {
    "url": "assets/chevron-left-DOTTBSTe.js",
    "revision": null
  }, {
    "url": "assets/camera-D84BI8I2.js",
    "revision": null
  }, {
    "url": "assets/calendar-plus-vexRskQL.js",
    "revision": null
  }, {
    "url": "assets/calendar-days-DTSeOoqC.js",
    "revision": null
  }, {
    "url": "assets/calendar-CXMuczD0.js",
    "revision": null
  }, {
    "url": "assets/blogPosts-BsK7JfEK.js",
    "revision": null
  }, {
    "url": "assets/bell-DdHXdDHf.js",
    "revision": null
  }, {
    "url": "assets/arrow-left-DLyn9cFR.js",
    "revision": null
  }, {
    "url": "assets/archive-C2kV4pVP.js",
    "revision": null
  }, {
    "url": "assets/addWeeks-BBbnhzqk.js",
    "revision": null
  }, {
    "url": "assets/activity-Dqs3MAnz.js",
    "revision": null
  }, {
    "url": "assets/WorkoutSessionPage-CFWs1Kpy.js",
    "revision": null
  }, {
    "url": "assets/WorkoutLogViewer-ClhByLNi.js",
    "revision": null
  }, {
    "url": "assets/WorkoutHistoryPage-CCT5hQDj.js",
    "revision": null
  }, {
    "url": "assets/WellnessCheckInsPage-PESJhSba.js",
    "revision": null
  }, {
    "url": "assets/WaitlistPage-BnmXSr_4.js",
    "revision": null
  }, {
    "url": "assets/UpgradePromptModal-Bk3MxBos.js",
    "revision": null
  }, {
    "url": "assets/TermsPage-ZTjF__28.js",
    "revision": null
  }, {
    "url": "assets/StripeResultModal-DUn0yIkZ.js",
    "revision": null
  }, {
    "url": "assets/Skeleton-C2sFfFIe.js",
    "revision": null
  }, {
    "url": "assets/SettingsPage-BP5jMNg2.js",
    "revision": null
  }, {
    "url": "assets/SessionPunchcard-Bsa4C_bX.js",
    "revision": null
  }, {
    "url": "assets/ScheduleSessionModal-BekM-32C.js",
    "revision": null
  }, {
    "url": "assets/SchedulePage-Wugl4dS2.js",
    "revision": null
  }, {
    "url": "assets/ResourcesPage-t0bWbodJ.js",
    "revision": null
  }, {
    "url": "assets/QuickCreateClientForm-Bf-KN7ro.js",
    "revision": null
  }, {
    "url": "assets/ProgressPhotosPage-CfOj2KKT.js",
    "revision": null
  }, {
    "url": "assets/ProgressChartsPage-CvlHC8am.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlocksPage-D5yCyMVo.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlockEditorPage-BePG7Ycm.js",
    "revision": null
  }, {
    "url": "assets/PrivacyPage-Devva7je.js",
    "revision": null
  }, {
    "url": "assets/OnboardingModal-Bvfbi98Q.js",
    "revision": null
  }, {
    "url": "assets/NutritionPage-DZxPCLxn.js",
    "revision": null
  }, {
    "url": "assets/NotFoundPage-ClAJjh5o.js",
    "revision": null
  }, {
    "url": "assets/MessagesPage-vVEVeidO.js",
    "revision": null
  }, {
    "url": "assets/MessageThread-DT7LwJm9.js",
    "revision": null
  }, {
    "url": "assets/ManagePackageModal-CyH8rL1Z.js",
    "revision": null
  }, {
    "url": "assets/ManageClientModal-CXN0kEYs.js",
    "revision": null
  }, {
    "url": "assets/LogSessionModal-B43GQDWk.js",
    "revision": null
  }, {
    "url": "assets/LineChart-rXiG0R6k.js",
    "revision": null
  }, {
    "url": "assets/InviteAcceptPage-DaLXx0Qj.js",
    "revision": null
  }, {
    "url": "assets/HabitTrackingPage-BgCp0_sS.js",
    "revision": null
  }, {
    "url": "assets/GymsPage-BeEqeRoA.js",
    "revision": null
  }, {
    "url": "assets/GymFeedPage-DvhMu5nT.js",
    "revision": null
  }, {
    "url": "assets/GhostDrafterModal-Ba5r8_Nr.js",
    "revision": null
  }, {
    "url": "assets/ExportModal-B41lv_7V.js",
    "revision": null
  }, {
    "url": "assets/ExerciseLibraryPage-CjWhLg7I.js",
    "revision": null
  }, {
    "url": "assets/EmptyState-DpvZO3Dc.js",
    "revision": null
  }, {
    "url": "assets/EmailLoginPage-CtEDKWc4.js",
    "revision": null
  }, {
    "url": "assets/DinoQuizPage-ESfRgNUN.js",
    "revision": null
  }, {
    "url": "assets/DayDetail-CbFWGSD5.js",
    "revision": null
  }, {
    "url": "assets/CsvClientImportModal-P8HtM-Ag.js",
    "revision": null
  }, {
    "url": "assets/ContactTimeline-BxdzCS7E.js",
    "revision": null
  }, {
    "url": "assets/CommandPalette-C0TrNeL3.js",
    "revision": null
  }, {
    "url": "assets/CoachSettingsModal-B60BtoWK.js",
    "revision": null
  }, {
    "url": "assets/CoachMessagesPage-D7_fToSD.js",
    "revision": null
  }, {
    "url": "assets/ClientsListPage-CZ-Vj5_7.js",
    "revision": null
  }, {
    "url": "assets/ClientRouteSync-WtDKhEPO.js",
    "revision": null
  }, {
    "url": "assets/ClientDashboard-D3fGjK3h.js",
    "revision": null
  }, {
    "url": "assets/ChecklistPage-BSi1--zc.js",
    "revision": null
  }, {
    "url": "assets/Card-Dt88TPUb.js",
    "revision": null
  }, {
    "url": "assets/Button-CzfUe8jf.js",
    "revision": null
  }, {
    "url": "assets/BulkImportModal-hpwJTfKV.js",
    "revision": null
  }, {
    "url": "assets/BlogPostPage-rVl-3Gol.js",
    "revision": null
  }, {
    "url": "assets/BlogListPage-CcyYvKhz.js",
    "revision": null
  }, {
    "url": "assets/AthleteOnboardingModal-CAqMxzjQ.js",
    "revision": null
  }, {
    "url": "assets/AthleteLayout-D4ez2d40.js",
    "revision": null
  }, {
    "url": "assets/AthleteGymPerformancePage-DbF4lZew.js",
    "revision": null
  }, {
    "url": "assets/AthleteDashboard-m5cKgyxV.js",
    "revision": null
  }, {
    "url": "assets/AnnouncementsPage-BLGz1QNx.js",
    "revision": null
  }, {
    "url": "assets/AnimatedModal-DMggzAX8.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsPanel-6pOZIbR4.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsDashboardPage-1G0ZA4z2.js",
    "revision": null
  }, {
    "url": "assets/AiPromptsPage-B-g4dDUI.js",
    "revision": null
  }, {
    "url": "assets/AiProgramModal-Cpe0-bPt.js",
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
