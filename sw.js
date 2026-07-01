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
    "revision": "53b8657dd4b568f4440b3c5610fc0f86"
  }, {
    "url": "assets/weight-Cyupoz_G.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-D490RTVu.js",
    "revision": null
  }, {
    "url": "assets/vendor-motion-Dew8GyGD.js",
    "revision": null
  }, {
    "url": "assets/utensils-BySnR2L1.js",
    "revision": null
  }, {
    "url": "assets/user-DBXaAeRj.js",
    "revision": null
  }, {
    "url": "assets/useEscapeKey-4GrLqI_s.js",
    "revision": null
  }, {
    "url": "assets/useComputedData-BQlz_Fmv.js",
    "revision": null
  }, {
    "url": "assets/useAthleteData-DP2n7kpV.js",
    "revision": null
  }, {
    "url": "assets/useAnalytics-B37iJgeS.js",
    "revision": null
  }, {
    "url": "assets/trophy-DbNGiS9h.js",
    "revision": null
  }, {
    "url": "assets/triangle-alert-LjpEeHLK.js",
    "revision": null
  }, {
    "url": "assets/trending-up-Bgyn2cHE.js",
    "revision": null
  }, {
    "url": "assets/trash-2-C_SnB7VB.js",
    "revision": null
  }, {
    "url": "assets/timer-C7Lv-hqo.js",
    "revision": null
  }, {
    "url": "assets/target-C4y_W58T.js",
    "revision": null
  }, {
    "url": "assets/subDays-B6-yeBpy.js",
    "revision": null
  }, {
    "url": "assets/send-CdCyPWsF.js",
    "revision": null
  }, {
    "url": "assets/search-CcNLSh9W.js",
    "revision": null
  }, {
    "url": "assets/save-_ScgISyq.js",
    "revision": null
  }, {
    "url": "assets/repeat-B6-XAcrA.js",
    "revision": null
  }, {
    "url": "assets/play-BRRHwUnu.js",
    "revision": null
  }, {
    "url": "assets/pdf.worker-B4IDxXWI.js",
    "revision": null
  }, {
    "url": "assets/pdf-DfaD4CCm.js",
    "revision": null
  }, {
    "url": "assets/package-BQP7MGUi.js",
    "revision": null
  }, {
    "url": "assets/minus-Cx8Mc1As.js",
    "revision": null
  }, {
    "url": "assets/mail-CH3ANzC9.js",
    "revision": null
  }, {
    "url": "assets/list-checks-jz1LTcIQ.js",
    "revision": null
  }, {
    "url": "assets/layers-lZiA94fB.js",
    "revision": null
  }, {
    "url": "assets/isToday-BdPF8_m5.js",
    "revision": null
  }, {
    "url": "assets/isSameDay-qoQwjtN1.js",
    "revision": null
  }, {
    "url": "assets/isBefore-BWsZt3uC.js",
    "revision": null
  }, {
    "url": "assets/index-mU5Rb8Jm.js",
    "revision": null
  }, {
    "url": "assets/index-C3QeQU1D.css",
    "revision": null
  }, {
    "url": "assets/heart-pulse-CsLhs5G7.js",
    "revision": null
  }, {
    "url": "assets/heart-CuC0kS1A.js",
    "revision": null
  }, {
    "url": "assets/graphicalItemSelectors-NH9vE9TE.js",
    "revision": null
  }, {
    "url": "assets/getDay-C7geCB0Q.js",
    "revision": null
  }, {
    "url": "assets/gauge-nLPntRaA.js",
    "revision": null
  }, {
    "url": "assets/formatDistanceToNow-BcAkjoIs.js",
    "revision": null
  }, {
    "url": "assets/flame-CgY2u2jx.js",
    "revision": null
  }, {
    "url": "assets/filter-BCFgEG8_.js",
    "revision": null
  }, {
    "url": "assets/file-up-CHNKVPXj.js",
    "revision": null
  }, {
    "url": "assets/file-text-BkYpU7Tp.js",
    "revision": null
  }, {
    "url": "assets/eye-DEf77F3M.js",
    "revision": null
  }, {
    "url": "assets/endOfMonth-sI2qjRPW.js",
    "revision": null
  }, {
    "url": "assets/eachDayOfInterval-yBR1OhXs.js",
    "revision": null
  }, {
    "url": "assets/dollar-sign-DcDG-uLQ.js",
    "revision": null
  }, {
    "url": "assets/dateUtils-BL6IdWUu.js",
    "revision": null
  }, {
    "url": "assets/copy-Sfo21DeS.js",
    "revision": null
  }, {
    "url": "assets/constructNow-CpPLKPjG.js",
    "revision": null
  }, {
    "url": "assets/clock-BP79xHnS.js",
    "revision": null
  }, {
    "url": "assets/circle-x-DlkXaNjG.js",
    "revision": null
  }, {
    "url": "assets/circle-check-B6Bqpbpv.js",
    "revision": null
  }, {
    "url": "assets/circle-B5jTmDSy.js",
    "revision": null
  }, {
    "url": "assets/chevron-up-pNTQTPzo.js",
    "revision": null
  }, {
    "url": "assets/chevron-left-7LnWkWVT.js",
    "revision": null
  }, {
    "url": "assets/camera-C6-KujU6.js",
    "revision": null
  }, {
    "url": "assets/calendar-plus-pk5lAzkH.js",
    "revision": null
  }, {
    "url": "assets/calendar-days-mi07LP8f.js",
    "revision": null
  }, {
    "url": "assets/calendar-aFQbDTEQ.js",
    "revision": null
  }, {
    "url": "assets/bell-0FytrgZk.js",
    "revision": null
  }, {
    "url": "assets/arrow-left-Ccmiwo3S.js",
    "revision": null
  }, {
    "url": "assets/archive-D52qwk1l.js",
    "revision": null
  }, {
    "url": "assets/addWeeks-BBLzm0uU.js",
    "revision": null
  }, {
    "url": "assets/activity-B_SmqaOO.js",
    "revision": null
  }, {
    "url": "assets/WorkoutSessionPage-CaB5w94r.js",
    "revision": null
  }, {
    "url": "assets/WorkoutLogViewer-CYfbaUuD.js",
    "revision": null
  }, {
    "url": "assets/WorkoutHistoryPage-DmFXptNI.js",
    "revision": null
  }, {
    "url": "assets/WaitlistPage-CHGsf4gT.js",
    "revision": null
  }, {
    "url": "assets/UpgradePromptModal-B6La8vQ3.js",
    "revision": null
  }, {
    "url": "assets/TermsPage-BNzQedR2.js",
    "revision": null
  }, {
    "url": "assets/StripeResultModal-CPARyFnd.js",
    "revision": null
  }, {
    "url": "assets/Skeleton-D3NtwpZs.js",
    "revision": null
  }, {
    "url": "assets/SettingsPage-kXSqxSWs.js",
    "revision": null
  }, {
    "url": "assets/SessionPunchcard-MP2jKIj2.js",
    "revision": null
  }, {
    "url": "assets/ScheduleSessionModal-yJRXSI_f.js",
    "revision": null
  }, {
    "url": "assets/SchedulePage-A7HlrCg9.js",
    "revision": null
  }, {
    "url": "assets/QuickCreateClientForm-FtE9WQ9J.js",
    "revision": null
  }, {
    "url": "assets/ProgressChartsPage-rIhfEVmo.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlocksPage-RAvSES61.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlockEditorPage-BQKRjEBL.js",
    "revision": null
  }, {
    "url": "assets/PrivacyPage-D84Gacj3.js",
    "revision": null
  }, {
    "url": "assets/OnboardingModal-2UqAguxd.js",
    "revision": null
  }, {
    "url": "assets/NotFoundPage-Z2ozgOI4.js",
    "revision": null
  }, {
    "url": "assets/MessagesPage-CRIXfhQz.js",
    "revision": null
  }, {
    "url": "assets/MessageThread-B-DUmzPf.js",
    "revision": null
  }, {
    "url": "assets/ManagePackageModal-9kRHuOc5.js",
    "revision": null
  }, {
    "url": "assets/ManageClientModal-CsXIFcBu.js",
    "revision": null
  }, {
    "url": "assets/LogSessionModal-CqSmz4q-.js",
    "revision": null
  }, {
    "url": "assets/LineChart-CNXQHNBk.js",
    "revision": null
  }, {
    "url": "assets/InviteAcceptPage-BAcx1Tfy.js",
    "revision": null
  }, {
    "url": "assets/GymsPage-rfBteWlg.js",
    "revision": null
  }, {
    "url": "assets/GymFeedPage-BlVY1-mz.js",
    "revision": null
  }, {
    "url": "assets/GhostDrafterModal-Rw9PvuMR.js",
    "revision": null
  }, {
    "url": "assets/ExportModal-BrXadjLn.js",
    "revision": null
  }, {
    "url": "assets/ExerciseLibraryPage--UFxbg8h.js",
    "revision": null
  }, {
    "url": "assets/EmptyState-DbY1cTI1.js",
    "revision": null
  }, {
    "url": "assets/EmailLoginPage-BweM16D7.js",
    "revision": null
  }, {
    "url": "assets/DayDetail-pMnU1_Cw.js",
    "revision": null
  }, {
    "url": "assets/CsvClientImportModal-jDuJHwWw.js",
    "revision": null
  }, {
    "url": "assets/ContactTimeline-KUfPpDAK.js",
    "revision": null
  }, {
    "url": "assets/CommandPalette-377G4-pp.js",
    "revision": null
  }, {
    "url": "assets/CoachSettingsModal-CHbXDtPB.js",
    "revision": null
  }, {
    "url": "assets/CoachMessagesPage-B4m1CNBY.js",
    "revision": null
  }, {
    "url": "assets/ClientsListPage-BEFutDdL.js",
    "revision": null
  }, {
    "url": "assets/ClientRouteSync-DsUI_CB4.js",
    "revision": null
  }, {
    "url": "assets/ClientDashboard-C2REdc16.js",
    "revision": null
  }, {
    "url": "assets/Card-CDvfm6pw.js",
    "revision": null
  }, {
    "url": "assets/Button-SMTyvYIA.js",
    "revision": null
  }, {
    "url": "assets/BulkImportModal-B9lx63Gj.js",
    "revision": null
  }, {
    "url": "assets/AthleteOnboardingModal-9sv1lHJJ.js",
    "revision": null
  }, {
    "url": "assets/AthleteLayout-_0a8hCwt.js",
    "revision": null
  }, {
    "url": "assets/AthleteGymPerformancePage-DJfX9G_e.js",
    "revision": null
  }, {
    "url": "assets/AthleteDashboard-BoT9hdnA.js",
    "revision": null
  }, {
    "url": "assets/AnnouncementsPage-DDMuvU0a.js",
    "revision": null
  }, {
    "url": "assets/AnimatedModal-Bs3jt4Qw.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsPanel-Cz6xFXWy.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsDashboardPage-DzgAZLlA.js",
    "revision": null
  }, {
    "url": "assets/AiProgramModal-5Iadoevo.js",
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
