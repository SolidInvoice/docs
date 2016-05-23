.. toctree::

===========
Downloading
===========

There are different ways of obtaining CSBill.

If you plan to contribute to CSBill (E.G write patches, you should follow the :ref:`installing-from-source` section.
Otherwise follow the :ref:`installing-distribution-package` section.

.. _installing-distribution-package:

-------------------------------
Installing distribution package
-------------------------------

To install a packaged version of CSBill, download the latest version from https://github.com/CSBill/CSBill/releases.

Extract the archive to a folder that is accessible from your web-server (view the :doc:`webserver` document for more information)

.. tip::

    If you are on a shared hosting environment, or only have ftp access to a server, then you can use ftp to upload all the files to the server

.. _installing-from-source:

----------------------
Installing from source
----------------------

In order to install CSBill from source, you will need `composer`_, a package and dependency manager for PHP.
If you do not yet have composer installed, follow the guide on :ref:`installing-composer`.

.. _installing-composer:

Installing Composer
-------------------

If you do not yet have composer installed on your system, you can use the following command to get composer

.. code-block:: bash

    $ curl -sS http://getcomposer.org/installer | php

Once composer is downloaded, you can use it from the command line using the following command

.. code-block:: bash

    $ php composer.phar


Using Composer
--------------

To install CSBill using `composer`_, run the following commands

.. code-block:: bash

    $ php composer.phar create-project csbill/csbill

This will download CSBill into a directory called `csbill`, and will also install all the dependencies.
If you encounter any issues while trying to install, please submit a `bug report`_.

The last step is to install the Node packages and dump all the web assets

.. code-block:: bash

    $ npm install
    $ ./node_modules/.bin/gulp

Using Git
---------

If you want to install CSBill using git, you can clone the repository using the following command:

.. code-block:: bash

    $ git clone https://github.com/CSBill/CSBill.git

You will then need `composer`_ to  install the required dependencies. To install Composer, please refer to the `installing-composer`_ section.

Go into the repository directory and install all the dependencies

.. code-block:: bash

    $ cd CSBill
    $ php composer.phar install

If you encounter any issues while trying to install, please submit a `bug report`_.

The last step is to install the Node packages and dump all the web assets

.. code-block:: bash

    $ npm install
    $ ./node_modules/.bin/gulp

.. _composer: http://getcomposer.org/
.. _bug report: https://github.com/CSBill/CSBill/issues
