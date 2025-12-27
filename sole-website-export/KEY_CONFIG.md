# SOLE Key Configuration Guide

## 📍 Where to Edit

Edit the configuration in **index.html** around line 440-455 (look for the "CONFIGURATION" section).

## 🔧 Change Redirect URL

```javascript
const REDIRECT_URL = "/pages/SOLEHomepage.html";  // ← Change this line
```

**Examples:**
- `"/pages/SOLEHomepage.html"` - Homepage
- `"/pages/store-hub.html"` - Store Hub
- `"/pages/Kaixu.html"` - Kaixu page
- `"https://example.com"` - External site

## 🔐 Valid Access Codes

Your site currently accepts **6 different access codes** (stored as secure SHA-256 hashes).

### Current Valid Keys (Hashes):
1. `8bd87cd6eb4782408ae0de4f91a044f5be2c73e3fc5f74753fba0fd9972018fe`
2. `3ae115d7f463145b75728cb19b5d70bbdad11fb1f172ef6bfdd0a972a0352131`
3. `ffd6ca845cf32dce623452fc25da82910a95ab4a8bb81c5c95be64e4517f9f83`
4. `1aceae38cebce45eb86cbd814163eb24aef14ef830c9abf195e49d059d6e107c`
5. `8f6f061f7fb22014e40f54be7e1997bb6e5e1954831e0ebfa3d6d064d5f2276b`
6. `f0d46da03b58e9b59d414676ae8b04380f129f2e338ec25d4ea6acc0f342489a`

## ➕ Add a New Key

1. Go to: https://emn178.github.io/online-tools/sha256.html
2. Type your new access code (e.g., "123456")
3. Copy the hash output
4. Add it to the `VALID_KEY_HASHES` array in index.html:

```javascript
const VALID_KEY_HASHES = new Set([
  "8bd87cd6eb4782408ae0de4f91a044f5be2c73e3fc5f74753fba0fd9972018fe",
  "3ae115d7f463145b75728cb19b5d70bbdad11fb1f172ef6bfdd0a972a0352131",
  "YOUR_NEW_HASH_HERE"  // ← Add new hash here
]);
```

## 🗑️ Remove a Key

Simply delete the hash line from the array in index.html.

## 🔒 Why Hashes?

Access codes are stored as SHA-256 hashes (not plain text) so even if someone views your source code, they can't see the actual access codes. Only the correct code will produce a matching hash when entered.

## 💾 After Making Changes

1. Save the file
2. Refresh your browser
3. The changes take effect immediately (no rebuild needed)
