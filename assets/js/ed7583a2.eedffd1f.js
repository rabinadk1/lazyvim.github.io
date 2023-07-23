"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[1993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),l=n(6010),s=n(2466),i=n(6550),o=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,l]),tabValues:l}}var g=n(2389);const _="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",b,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",_)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(j,(0,a.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},9482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),s=n(5162);const i={},o="lang.java",u={unversionedId:"extras/lang/java",id:"extras/lang/java",title:"lang.java",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/extras/lang/java.md",sourceDirName:"extras/lang",slug:"/extras/lang/java",permalink:"/extras/lang/java",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/lang/java.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/extras/lang/go"},next:{title:"JSON",permalink:"/extras/lang/json"}},c={},d=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-dap",id:"nvim-dap",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"which-key.nvim",id:"which-keynvim",level:2},{value:"nvim-jdtls",id:"nvim-jdtls",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"langjava"},(0,r.kt)("inlineCode",{parentName:"h1"},"lang.java")),(0,r.kt)("p",null,"To use this, add it to your ",(0,r.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.java" },\n    { import = "plugins" },\n  },\n})\n')),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)("p",null," Add java to treesitter."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.ensure_installed) == "table" then\n    vim.list_extend(opts.ensure_installed, { "java" })\n  end\nend\n'))),(0,r.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      vim.list_extend(opts.ensure_installed, { "java" })\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-dap"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")),(0,r.kt)("p",null," Ensure java debugger and test packages are installed"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    {\n      "williamboman/mason.nvim",\n      opts = function(_, opts)\n        opts.ensure_installed = opts.ensure_installed or {}\n        vim.list_extend(opts.ensure_installed, { "java-test", "java-debug-adapter" })\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"masonnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  vim.list_extend(opts.ensure_installed, { "java-test", "java-debug-adapter" })\nend\n'))),(0,r.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    vim.list_extend(opts.ensure_installed, { "java-test", "java-debug-adapter" })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," Set up lsp with mfussenegger/nvim-jdtls instead of nvim-lspconfig."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- make sure mason installs the server\n  servers = {\n    jdtls = {\n      -- stylua: ignore\n      keys = {\n        { "<leader>co", function() require("jdtls").organize_imports() end, desc = "Organize Imports", },\n        { "<leader>cR", function() require("jdtls").rename_file() end, desc = "Rename File", },\n        { "<leader>cxv", function() require("jdtls").extract_variable() end, desc = "Extract Variable", },\n        { "<leader>cxv", function() require("jdtls").extract_variable({ visual = true }) end, mode = "v", desc = "Extract Variable", },\n        { "<leader>cxc", function() require("jdtls").extract_constant() end, desc = "Extract Constant", },\n        { "<leader>cxc", function() require("jdtls").extract_constant({ visual = true }) end, mode = "v", desc = "Extract Constant", },\n        { "<leader>cxm", function() require("jdtls").extract_method({ visual = true }) end, mode = "v", desc = "Extract Method", },\n      },\n    },\n  },\n  setup = {\n    -- Override the default jdtls server startup to use nvim-jdtls.\n    jdtls = function()\n      -- The lspconfig configuration for jdtls contains two useful items:\n      -- 1. The list of filetypes on which to match.\n      -- 2. Custom method for finding the root for a java project.\n      local lsp_config = require("lspconfig.server_configurations.jdtls").default_config\n      local find_java_project_root = lsp_config.root_dir\n      local filetypes = lsp_config.filetypes\n      -- lookup paths for java test and debugger package\n      local mason_registry = require("mason-registry")\n      local bundles = {}\n      if mason_registry.has_package("java-test") and mason_registry.has_package("java-debug-adapter") then\n        -- jdtls tools configuration for debugging support\n        local java_test_pkg = mason_registry.get_package("java-test")\n        local java_test_path = java_test_pkg:get_install_path()\n        local java_dbg_pkg = mason_registry.get_package("java-debug-adapter")\n        local java_dbg_path = java_dbg_pkg:get_install_path()\n        local jar_patterns = {\n          java_dbg_path .. "/extension/server/com.microsoft.java.debug.plugin-*.jar",\n          java_test_path .. "/extension/server/*.jar"\n        }\n        for _, jar_pattern in ipairs(jar_patterns) do\n          for _, bundle in ipairs(vim.split(vim.fn.glob(jar_pattern), \'\\n\')) do\n            table.insert(bundles, bundle)\n          end\n        end\n      end\n      -- Attach jdtls for the proper filetypes (i.e. java).\n      -- Existing server will be reused if the root_dir matches.\n      vim.api.nvim_create_autocmd("FileType", {\n        group = vim.api.nvim_create_augroup("MyJdtls", { clear = true }),\n        pattern = filetypes,\n        callback = function()\n          local fname = vim.api.nvim_buf_get_name(0)\n          local root_dir = find_java_project_root(fname)\n          local project_name = root_dir and vim.fs.basename(root_dir)\n          local cmd = { "jdtls" }\n          if project_name then\n            local jdtls_cache_dir = vim.fs.joinpath(vim.fn.stdpath("cache"), "jdtls", project_name)\n            vim.list_extend(cmd, {\n              "-configuration",\n              vim.fs.joinpath(jdtls_cache_dir, "config"),\n              "-data",\n              vim.fs.joinpath(jdtls_cache_dir, "workspace"),\n            })\n          end\n          local jdtls_base_config = {\n            on_attach = require("lazyvim.util").on_attach(function(client, buffer)\n              if mason_registry.has_package("java-test") then\n                -- custom keymaps for Java test runner (not yet compatible with neotest)\n                vim.keymap.set("n", "<leader>tT", function() require("jdtls").pick_test({ bufnr = buffer }) end, { buffer = buffer, desc = "Run specific Test" })\n                vim.keymap.set("n", "<leader>tt", function() require("jdtls").test_class({ bufnr = buffer }) end, { buffer = buffer, desc = "Run File" })\n                vim.keymap.set("n", "<leader>tr", function() require("jdtls").test_nearest_method({ bufnr = buffer }) end, { buffer = buffer, desc = "Run nearest" })\n              end\n              if mason_registry.has_package("java-debug-adapter") then\n                -- custom init for Java debugger\n                require("jdtls").setup_dap({ hotcodereplace = "auto" })\n                require("jdtls.dap").setup_dap_main_class_configs()\n              end\n              require("jdtls.setup").add_commands()\n            end),\n            cmd = cmd,\n            root_dir = root_dir,\n            init_options = {\n              bundles = bundles,\n            }\n          }\n          local jdtls_opts = require("lazyvim.util").opts("nvim-jdtls")\n          require("jdtls").start_or_attach(vim.tbl_deep_extend("force", jdtls_opts or {}, jdtls_base_config))\n          require("which-key").register({ c = { x = { name = "Extract" } } }, { prefix = "<leader>" })\n        end,\n      })\n      return true -- avoid duplicate servers\n    end,\n  },\n}\n'))),(0,r.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  dependencies = { "folke/which-key.nvim", "mfussenegger/nvim-jdtls" },\n  opts = {\n    -- make sure mason installs the server\n    servers = {\n      jdtls = {\n        -- stylua: ignore\n        keys = {\n          { "<leader>co", function() require("jdtls").organize_imports() end, desc = "Organize Imports", },\n          { "<leader>cR", function() require("jdtls").rename_file() end, desc = "Rename File", },\n          { "<leader>cxv", function() require("jdtls").extract_variable() end, desc = "Extract Variable", },\n          { "<leader>cxv", function() require("jdtls").extract_variable({ visual = true }) end, mode = "v", desc = "Extract Variable", },\n          { "<leader>cxc", function() require("jdtls").extract_constant() end, desc = "Extract Constant", },\n          { "<leader>cxc", function() require("jdtls").extract_constant({ visual = true }) end, mode = "v", desc = "Extract Constant", },\n          { "<leader>cxm", function() require("jdtls").extract_method({ visual = true }) end, mode = "v", desc = "Extract Method", },\n        },\n      },\n    },\n    setup = {\n      -- Override the default jdtls server startup to use nvim-jdtls.\n      jdtls = function()\n        -- The lspconfig configuration for jdtls contains two useful items:\n        -- 1. The list of filetypes on which to match.\n        -- 2. Custom method for finding the root for a java project.\n        local lsp_config = require("lspconfig.server_configurations.jdtls").default_config\n        local find_java_project_root = lsp_config.root_dir\n        local filetypes = lsp_config.filetypes\n        -- lookup paths for java test and debugger package\n        local mason_registry = require("mason-registry")\n        local bundles = {}\n        if mason_registry.has_package("java-test") and mason_registry.has_package("java-debug-adapter") then\n          -- jdtls tools configuration for debugging support\n          local java_test_pkg = mason_registry.get_package("java-test")\n          local java_test_path = java_test_pkg:get_install_path()\n          local java_dbg_pkg = mason_registry.get_package("java-debug-adapter")\n          local java_dbg_path = java_dbg_pkg:get_install_path()\n          local jar_patterns = {\n            java_dbg_path .. "/extension/server/com.microsoft.java.debug.plugin-*.jar",\n            java_test_path .. "/extension/server/*.jar"\n          }\n          for _, jar_pattern in ipairs(jar_patterns) do\n            for _, bundle in ipairs(vim.split(vim.fn.glob(jar_pattern), \'\\n\')) do\n              table.insert(bundles, bundle)\n            end\n          end\n        end\n        -- Attach jdtls for the proper filetypes (i.e. java).\n        -- Existing server will be reused if the root_dir matches.\n        vim.api.nvim_create_autocmd("FileType", {\n          group = vim.api.nvim_create_augroup("MyJdtls", { clear = true }),\n          pattern = filetypes,\n          callback = function()\n            local fname = vim.api.nvim_buf_get_name(0)\n            local root_dir = find_java_project_root(fname)\n            local project_name = root_dir and vim.fs.basename(root_dir)\n            local cmd = { "jdtls" }\n            if project_name then\n              local jdtls_cache_dir = vim.fs.joinpath(vim.fn.stdpath("cache"), "jdtls", project_name)\n              vim.list_extend(cmd, {\n                "-configuration",\n                vim.fs.joinpath(jdtls_cache_dir, "config"),\n                "-data",\n                vim.fs.joinpath(jdtls_cache_dir, "workspace"),\n              })\n            end\n            local jdtls_base_config = {\n              on_attach = require("lazyvim.util").on_attach(function(client, buffer)\n                if mason_registry.has_package("java-test") then\n                  -- custom keymaps for Java test runner (not yet compatible with neotest)\n                  vim.keymap.set("n", "<leader>tT", function() require("jdtls").pick_test({ bufnr = buffer }) end, { buffer = buffer, desc = "Run specific Test" })\n                  vim.keymap.set("n", "<leader>tt", function() require("jdtls").test_class({ bufnr = buffer }) end, { buffer = buffer, desc = "Run File" })\n                  vim.keymap.set("n", "<leader>tr", function() require("jdtls").test_nearest_method({ bufnr = buffer }) end, { buffer = buffer, desc = "Run nearest" })\n                end\n                if mason_registry.has_package("java-debug-adapter") then\n                  -- custom init for Java debugger\n                  require("jdtls").setup_dap({ hotcodereplace = "auto" })\n                  require("jdtls.dap").setup_dap_main_class_configs()\n                end\n                require("jdtls.setup").add_commands()\n              end),\n              cmd = cmd,\n              root_dir = root_dir,\n              init_options = {\n                bundles = bundles,\n              }\n            }\n            local jdtls_opts = require("lazyvim.util").opts("nvim-jdtls")\n            require("jdtls").start_or_attach(vim.tbl_deep_extend("force", jdtls_opts or {}, jdtls_base_config))\n            require("which-key").register({ c = { x = { name = "Extract" } } }, { prefix = "<leader>" })\n          end,\n        })\n        return true -- avoid duplicate servers\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"which-keynvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/which-key.nvim"},"which-key.nvim")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/which-key.nvim", "mfussenegger/nvim-jdtls" }\n')))),(0,r.kt)("h2",{id:"nvim-jdtls"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-jdtls"},"nvim-jdtls")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(s.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'"mfussenegger/nvim-jdtls"\n')))))}m.isMDXComponent=!0}}]);