# Issues & Fixes

A structured reference of backend issues encountered during development, including error messages, debugging steps, solutions, and key takeaways.

---

## Issue 01 — MongoDB `querySrv ECONNREFUSED`

### ❌ Error

While starting the backend with:

```bash
npx nodemon
```

the following error occurred:

```text
Error: querySrv ECONNREFUSED _mongodb._tcp.cluster0.tia4uy.mongodb.net
```

---

### 🔍 Problem

Node.js was unable to resolve the **MongoDB Atlas SRV DNS record**.

The application was using a MongoDB connection string with:

```text
mongodb+srv://...
```

The `mongodb+srv://` connection format requires a **DNS SRV lookup** to locate the MongoDB servers.

The DNS request was being refused, which prevented Mongoose from establishing a connection with MongoDB Atlas.

---

### 🧪 Diagnosis

I checked the MongoDB SRV DNS records using:

```bash
nslookup -type=SRV _mongodb._tcp.cluster0.tia4uy.mongodb.net
```

The command successfully returned the MongoDB server records:

```text
ac-kmxfdxw-shard-00-00.tia4uy.mongodb.net
ac-kmxfdxw-shard-00-01.tia4uy.mongodb.net
ac-kmxfdxw-shard-00-02.tia4uy.mongodb.net
```

This confirmed that the MongoDB SRV records were available.

---

### ✅ Solution

Configured Node.js to use Google's public DNS servers:

```js
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
```

---

### ✅ Result

After applying the DNS configuration, the backend successfully connected to MongoDB:

```text
Listening at port 8000
Database Connected
```

---

### 🧠 Quick Revision

```text
mongodb+srv://
       ↓
   DNS SRV Lookup
       ↓
Find MongoDB Servers
       ↓
 MongoDB Connection
```

| Term             | Meaning                                      |
| ---------------- | -------------------------------------------- |
| **DNS**          | Resolves domain names to server information  |
| **SRV**          | DNS record used to locate a service          |
| **querySrv**     | Node.js operation used for an SRV DNS lookup |
| **ECONNREFUSED** | The connection/request was refused           |
| **8.8.8.8**      | Google Public DNS server                     |
| **8.8.4.4**      | Google Public DNS server                     |

---

### 📌 Key Takeaway

The issue was related to **DNS resolution**, rather than the Mongoose connection logic itself.

The MongoDB Atlas cluster and SRV records were available, but Node.js was unable to resolve the SRV record through the default DNS configuration.

---

### Status

**✅ Fixed**

**🔄 Revisit Later:**  
Review how Node.js performs DNS resolution and how MongoDB `mongodb+srv://` connection strings use SRV records.

---

# Issue Documentation Template

Use this template for documenting future backend issues.

## Issue XX — [Short Error Name]

### ❌ Error

Describe the error and include the exact error message.

```text
[Exact error message]
```

---

### 🔍 Problem

Briefly explain what caused the issue.

---

### 🧪 Diagnosis

Document the commands, checks, or debugging steps used to identify the problem.

```bash
[Command used]
```

---

### ✅ Solution

Describe the fix and include the relevant code or command.

```js
// Solution
```

---

### ✅ Result

Describe what happened after applying the solution.

```text
[Successful output]
```

---

### 🧠 Quick Revision

Summarize the concept in a few lines.

```text
Problem
   ↓
Diagnosis
   ↓
Solution
   ↓
Result
```

---

### 📌 Key Takeaway

Write the most important lesson learned from the issue.

---

### Status

**✅ Fixed**

**🔄 Revisit Later:**  
[Concept to review]

```

```
