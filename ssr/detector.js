module.exports = (ua) => {
  const client = {
    Bot: false,
  };

  if (/mobile/i.test(ua)) {
    client.Mobile = true;
  }

  if (/like Mac OS X/.test(ua)) {
    client.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, ".");
    client.iPhone = /iPhone/.test(ua);
    client.iPad = /iPad/.test(ua);
  }

  if (/Android/.test(ua)) {
    client.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];
  }

  if (/webOS\//.test(ua)) {
    client.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];
  }

  if (/(Intel|PPC) Mac OS X/.test(ua)) {
    client.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, ".") || true;
  }

  if (/Windows NT/.test(ua)) {
    client.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];
  }

  if (/bot/i.test(ua)) {
    client.Bot = true;
  }

  if (!client.Mobile && !client.iOS && !client.Android && !client.webOS && !client.Mac && !client.Windows) {
    client.Bot = true;
  }

  return client;
};
