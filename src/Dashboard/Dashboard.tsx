import { Fragment } from "react/jsx-runtime";
import Layout from "../Layout/Layout";
import { Card } from "../components/Card";
import { CategoryBar } from "@tremor/react";
import { Divider, ProgressCircle } from "@tremor/react";
import { Link } from "react-router-dom";
import chartdata from "./ChartsData";
import { AreaChart } from "../components/AreaCharts";

export default function Dashboard() {
  return (
    <Fragment>
      <Layout>
        <div className="flex flex-col gap-4">
          <main>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  Api Dashboard
                </h1>
                <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
                  Real-time monitoring of api metrics with AI-powered insights
                </p>
              </div>

              <div className="flex gap-5">
                <Link
                  to="/docs"
                  className="text-xs underline underline-offset-4 text-blue-500"
                >
                  Documentation
                </Link>
                <Link
                  to="/support"
                  className="text-xs underline underline-offset-4 text-blue-500"
                >
                  Contact Support
                </Link>
              </div>

              {/* <TicketDrawer open={isOpen} onOpenChange={setIsOpen} /> */}
            </div>
            <Divider />
            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Current Api Calls
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                  247
                </dd>
                <CategoryBar
                  values={[82, 13, 5]}
                  className="mt-6"
                  colors={["blue", "gray", "red"]}
                  showLabels={false}
                />
                <ul
                  role="list"
                  className="mt-4 flex flex-wrap gap-x-10 gap-y-4 text-sm"
                >
                  <li>
                    <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                      82%
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm">Resolved</span>
                    </div>
                  </li>
                  <li>
                    <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                      13%
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm">In Progress</span>
                    </div>
                  </li>
                  <li>
                    <span className="text-base font-semibold text-gray-900 dark:text-gray-50">
                      5%
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm">Escalated</span>
                    </div>
                  </li>
                </ul>
              </Card>
              <Card>
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Average Latency
                </dt>
                <div className="mt-4 flex flex-nowrap items-center justify-between gap-y-4">
                  <dd className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm">Within SLA</span>
                      </div>
                      <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        83.3%
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="size-2.5 shrink-0 rounded-sm bg-red-500 dark:bg-red-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-900 dark:text-gray-50">
                          SLA Breached
                        </span>
                      </div>
                      <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        16.7%
                      </span>
                    </div>
                  </dd>
                  <ProgressCircle value={83} radius={45} strokeWidth={7} />
                </div>
              </Card>
              <Card>
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Error Rate
                </dt>
                <div className="mt-4 flex items-center gap-x-8 gap-y-4">
                  <dd className="space-y-3 whitespace-nowrap">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="size-2.5 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm">Today</span>
                      </div>
                      <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        573
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="size-2.5 shrink-0 rounded-sm bg-gray-400 dark:bg-gray-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm">Yesterday</span>
                      </div>
                      <span className="mt-1 block text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        451
                      </span>
                    </div>
                  </dd>
                </div>
              </Card>
              <AreaChart
                className="h-80 w-full"
                data={chartdata}
                index="date"
                categories={["SolarPanels", "Inverters"]}
                valueFormatter={(number: number) =>
                  `$${Intl.NumberFormat("us").format(number).toString()}`
                }
                onValueChange={(v) => console.log(v)}
              />
            </dl>
            {/* <DataTable data={tickets} columns={columns} /> */}
          </main>
        </div>
      </Layout>
    </Fragment>
  );
}
