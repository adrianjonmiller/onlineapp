﻿function __GetAppStateVariableName() {
    return "__state";
}
function __Init() {
    document.AppState = AppState;

    // Detect language switch
    var temp = AppState().routes.language.val;
    AppState().routes.language.val = function (language) {
        if (!language || temp() == language) {
            return temp();
        }
        var result = temp(language);
        __Route();
        return result;
    };

    // Hash navigation initialization
    $(window).hashchange(function () {
        AppState().hashInfo = __GetHashInfo();
        AppState().data = AppState().hashInfo.data;
        __Route();
    });
    $(window).hashchange();
}
function __GetWorkspaceId(path) {
    var result = AppState().workspaces.root;
    var separator = AppState().workspaces.separator;

    if (path && path.length > 0) {
        var filtered = path.filter(function (element) { return element.trim().length > 0; });
        if (filtered.length > 0) result += separator + filtered.join(separator);
    }

    return result;
}
function __URLCache(url, val) {

    var urlCache = AppState().urlCache;

    if (!val) {
        var ret;

        if (urlCache) {
            for (var index = 0; index < urlCache.count; index++) {
                if (urlCache.urls[index] == url) {
                    ret = urlCache.cache[index];
                    break;
                }
            }
        } else {
            ret = false;
        }

        if (ret)
            AppState().pushMessage("Cache for URL '" + url + "' found.");
        else
            AppState().pushMessage("No cache for URL '" + url + "' found.");

        return ret;
    } else {
        var index = -1;
        $.each(urlCache.urls, function (_index, item) { if (item == url) { index = _index; return false; } });
        if (index == -1) index = urlCache.count;

        urlCache.count++;
        urlCache.urls[index] = url;
        urlCache.cache[index] = val;
    }
}
function __GetHashInfo() {
    var info = { nav: "", hash: "", datastr: "", parts: [], data: { count: 0, vars: {} }};

    if (window.location.hash && window.location.hash.length > 1) {
        info.hash = window.location.hash.substr(1, window.location.hash.length - 1);
        if (info.hash.indexOf("?") > -1) {
            info.nav = info.hash.substr(0, info.hash.indexOf("?"));
            if (info.hash.indexOf("?") + 1 < info.hash.length) {
                info.datastr = info.hash.substr(info.hash.indexOf("?") + 1, info.hash.length - (info.hash.indexOf("?") + 1));
                var dataparts = info.datastr.split("&");
                $.each(dataparts, function (index, item) { info.data.count++; info.data.vars[item.split("=")[0]] = item.split("=")[1]; });
            }
        } else {
            info.nav = info.hash;
        }
        info.parts = info.nav.split("/");
    }
    return info;
}
function __Route() {
    var routeCall = null;

    if (!AppState().hashInfo.nav) // default
        routeCall = function () { __LoadRoute((AppState().routes.defaultFolder + AppState().routes.defaultPage).split("/")); };
    else if (AppState().hashInfo.parts.length == 1)
        routeCall = function () { __LoadRoute((AppState().routes.defaultFolder + AppState().hashInfo.parts[0]).split("/")); };
    else
        routeCall = function () { __LoadRoute(AppState().hashInfo.parts); };

    console.log("Pushing route: " + AppState().hashInfo.nav);

    AppState().routes.loading.push({
        description: "__Route call: " + AppState().hashInfo.nav,
        execute: routeCall
    });
}
function __LoadRoute(parts, path, workspaceId, description) {
    AppState().routes.loading.onBefore();
    parts = parts.slice(0).reverse();

    if (!path) path = "";
    if (!workspaceId) workspaceId = __GetWorkspaceId();

    var part = parts.pop();

    if (parts.length == 0) {
        if (part == "") part = AppState().routes.defaultPage;
        path = AppState().routes.getLanguageBase() + path + part + AppState().routes.extension;
        AJAXLoadHTML(path, null, function (msg) { __LoadWorkspace(workspaceId, msg, path); });
    } else {
        path += part + "/";
        var masterpagePath =
            AppState().routes.getLanguageBase() +
            path +
            AppState().routes.masterPage +
            AppState().routes.extension;

        AJAXLoadHTML(masterpagePath, null,
            function (msg) {
                AppState().routes.loading.halt();
                // console.log("Routes halted.");

                AppState().routes.loading.push({
                    description: "Route child: " + path,
                    execute: function () {
                        // console.log("Loading child route.");
                        workspaceId = __GetWorkspaceId(path.split("/"));
                        __LoadRoute(parts, path, workspaceId);
                    }
                });
                // console.log("pushed next route");

                __LoadWorkspace(workspaceId, msg, masterpagePath);
                // console.log("loaded master page");
            },
            {
                errorCallBack: function (msg) { __LoadRoute(parts, path, workspaceId); }
            });
    }
}
function __LoadWorkspace(workspaceId, data, path) {
    var workspaceElement = $("#" + workspaceId);
    if (workspaceElement.length == 0) 
        console.log("No workspace id '" + workspaceId + "' could be found.");

    var workspaces = AppState().workspaces;

    var loadedWorkspace = workspaces.loaded.filter(function (element) { return element.id == workspaceId; });
    if (loadedWorkspace.length > 0) 
    {
        if (loadedWorkspace[0].path == path) {
            AppState().routes.loading.resume();
            return; // No change. Do nothing.
        }
        workspaces.loaded = workspaces.loaded.filter(function (element) {
            return element.id.substring(0, workspaceId.length) != workspaceId; 
        });
    }

    workspaceElement.html(data);
    workspaces.loaded.push({ id: workspaceId, path: path });
}
