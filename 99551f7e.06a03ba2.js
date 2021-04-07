(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),O=r,s=u["".concat(b,".").concat(O)]||u[O]||d[O]||l;return a?n.a.createElement(s,i(i({ref:t},o),{},{components:a})):n.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),l=(a(0),a(117)),b={id:"configurations-glossary",title:"Configurations Glossary"},i={unversionedId:"configurations-glossary",id:"configurations-glossary",isDocsHomePage:!1,title:"Configurations Glossary",description:"Api Package",source:"@site/docs/ConfigurationsGlossary.md",slug:"/configurations-glossary",permalink:"/docs/configurations-glossary",version:"current",sidebar:"tryNowSidebar",previous:{title:"Performance Configurations",permalink:"/docs/performance-configurations"},next:{title:"Deploying",permalink:"/docs/deploying"}},c=[{value:"Api Package",id:"api-package",children:[{value:"Variables needed for both estimation approaches with AWS:",id:"variables-needed-for-both-estimation-approaches-with-aws",children:[]},{value:"Variables needed for the Billing Data (Holistic) approach with AWS:",id:"variables-needed-for-the-billing-data-holistic-approach-with-aws",children:[]},{value:"Variables needed for the Cloud Usage API (Higher Accuracy) approach with AWS:",id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-aws",children:[]},{value:"Optionally set this to &quot;GCP&quot; or &quot;AWS&quot; if your application is deployed to AWS or GCP:",id:"optionally-set-this-to-gcp-or-aws-if-your-application-is-deployed-to-aws-or-gcp",children:[]},{value:"Variables needed for the Billing Data (Holistic) approach with GCP:",id:"variables-needed-for-the-billing-data-holistic-approach-with-gcp",children:[]},{value:"Variables needed for the Cloud Usage API (Higher Accuracy) approach with GCP:",id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-gcp",children:[]},{value:"Variables needed for the Billing Data (Holistic) approach with Azure:",id:"variables-needed-for-the-billing-data-holistic-approach-with-azure",children:[]},{value:"Optionally set this to &quot;GCP&quot; if your Azure credentials are stored in Google Secrets Manager:",id:"optionally-set-this-to-gcp-if-your-azure-credentials-are-stored-in-google-secrets-manager",children:[]},{value:"Optionally set this to group timestamps from queried data to help with performance:",id:"optionally-set-this-to-group-timestamps-from-queried-data-to-help-with-performance",children:[]}]},{value:"Client Package",id:"client-package",children:[{value:"Set this to true to ensure the application requests usage data from the entire previous calendar year to today:",id:"set-this-to-true-to-ensure-the-application-requests-usage-data-from-the-entire-previous-calendar-year-to-today",children:[]},{value:"Optionally set the date range to query the data starting back in a time span:",id:"optionally-set-the-date-range-to-query-the-data-starting-back-in-a-time-span",children:[]}]}],o={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"api-package"},"Api Package"),Object(l.b)("h3",{id:"variables-needed-for-both-estimation-approaches-with-aws"},"Variables needed for both estimation approaches with AWS:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_TARGET_ACCOUNT_ROLE_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-target-account-role-name"),Object(l.b)("td",{parentName:"tr",align:null},"(e.g. ccf-athena)")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-aws"},"Variables needed for the Billing Data (Holistic) approach with AWS:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_USE_BILLING_DATA"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_DB_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-athena-db-name"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_DB_TABLE"),Object(l.b)("td",{parentName:"tr",align:null},"your-athena-db-table"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_REGION"),Object(l.b)("td",{parentName:"tr",align:null},"your-athena-region"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ATHENA_QUERY_RESULT_LOCATION"),Object(l.b)("td",{parentName:"tr",align:null},"s3://your-athena-query-results-location"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_BILLING_ACCOUNT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-billing-account-id"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_BILLING_ACCOUNT_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-billing-account-name"),Object(l.b)("td",{parentName:"tr",align:null},"string")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-aws"},"Variables needed for the Cloud Usage API (Higher Accuracy) approach with AWS:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_ACCOUNTS"),Object(l.b)("td",{parentName:"tr",align:null},'[{"id":"your-account-id","name":"Your AWS Account"}]'),Object(l.b)("td",{parentName:"tr",align:null},"array")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"optionally-set-this-to-gcp-or-aws-if-your-application-is-deployed-to-aws-or-gcp"},'Optionally set this to "GCP" or "AWS" if your application is deployed to AWS or GCP:'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_AUTH_MODE"),Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_PROXY_ACCOUNT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-proxy-account-id"),Object(l.b)("td",{parentName:"tr",align:null},"Only needed for AWS_AUTH_MODE 'GCP', string (e.g. deploying to GCP)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AWS_PROXY_ROLE_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"your-proxy-role-name"),Object(l.b)("td",{parentName:"tr",align:null},"Only needed for AWS_AUTH_MODE 'GCP', string (e.g. deploying to GCP)")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-gcp"},"Variables needed for the Billing Data (Holistic) approach with GCP:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_USE_BILLING_DATA"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_BIG_QUERY_TABLE"),Object(l.b)("td",{parentName:"tr",align:null},"your-billing-export-table"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_BILLING_ACCOUNT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-billing-account-id"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_BILLING_ACCOUNT_NAME"),Object(l.b)("td",{parentName:"tr",align:null},"billing-account-name"),Object(l.b)("td",{parentName:"tr",align:null},"string")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-gcp"},"Variables needed for the Cloud Usage API (Higher Accuracy) approach with GCP:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GCP_PROJECTS"),Object(l.b)("td",{parentName:"tr",align:null},'[{"id":"your-gcp-project-id","name":"Your GCP Project"}]'),Object(l.b)("td",{parentName:"tr",align:null},"array")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-azure"},"Variables needed for the Billing Data (Holistic) approach with Azure:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_USE_BILLING_DATA"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_CLIENT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-azure-client-id"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_CLIENT_SECRET"),Object(l.b)("td",{parentName:"tr",align:null},"your-azure-client-secret"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_TENANT_ID"),Object(l.b)("td",{parentName:"tr",align:null},"your-azure-tenant-id"),Object(l.b)("td",{parentName:"tr",align:null},"string")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"optionally-set-this-to-gcp-if-your-azure-credentials-are-stored-in-google-secrets-manager"},'Optionally set this to "GCP" if your Azure credentials are stored in Google Secrets Manager:'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AZURE_AUTH_MODE"),Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"string")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"optionally-set-this-to-group-timestamps-from-queried-data-to-help-with-performance"},"Optionally set this to group timestamps from queried data to help with performance:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GROUP_QUERY_RESULTS_BY"),Object(l.b)("td",{parentName:"tr",align:null},"day"),Object(l.b)("td",{parentName:"tr",align:null},"string (e.g. day/week/month/quarter/year)")))),Object(l.b)("br",null),Object(l.b)("h2",{id:"client-package"},"Client Package"),Object(l.b)("h3",{id:"set-this-to-true-to-ensure-the-application-requests-usage-data-from-the-entire-previous-calendar-year-to-today"},"Set this to true to ensure the application requests usage data from the entire previous calendar year to today:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"REACT_APP_PREVIOUS_YEAR_OF_USAGE"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"boolean")))),Object(l.b)("br",null),Object(l.b)("h3",{id:"optionally-set-the-date-range-to-query-the-data-starting-back-in-a-time-span"},"Optionally set the date range to query the data starting back in a time span:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"REACT_APP_DATE_RANGE_VALUE"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"REACT_APP_DATE_RANGE_TYPE"),Object(l.b)("td",{parentName:"tr",align:null},"year"),Object(l.b)("td",{parentName:"tr",align:null},"string (e.g. day(s), week(s), month(s), quarter(s), year(s))")))))}p.isMDXComponent=!0}}]);