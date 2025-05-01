**Distributed File System (DFS) Architecture – Short Notes:**

1. **Definition**: DFS is a system that allows files to be stored and accessed across multiple nodes in a distributed network as if they were on a local file system.

2. **Key Components**:
   - **Clients**: Access and manipulate files.
   - **Servers**: Store file data and metadata.
   - **Namespace Manager**: Manages directory structure and file names.
   - **Metadata Server**: Handles file locations, permissions, and other attributes.

3. **Features**:
   - **Transparency**: Hides distribution from users (location, access, replication).
   - **Fault Tolerance**: Uses redundancy to handle failures.
   - **Scalability**: Handles large volumes of data and clients.
   - **Concurrency Control**: Manages multiple users accessing files.

4. **Examples**: Google File System (GFS), Hadoop Distributed File System (HDFS), NFS, AFS.
