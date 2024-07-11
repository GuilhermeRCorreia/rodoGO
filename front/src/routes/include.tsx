import { Layout } from "components/layout";
import InputFields from "components/notasAdd/inputFields";
import NFTable from "components/notasAdd/table/nfTable";
import PCTabela from "components/notasAdd/table/pcTable";
import AdminPanelLayout from "src/components/navs/admin-panel-layout";

export default function Inclusao() {
  return (
    <Layout>
      {" "}
      <AdminPanelLayout>
        <Layout.Body>
          <InputFields />
          <div className="flex w-full gap-5">
            <div className="flex-none w-1/3">
              <NFTable />
            </div>
            <div className="flex-grow">
              <PCTabela />
            </div>
          </div>
        </Layout.Body>{" "}
      </AdminPanelLayout>
    </Layout>
  );
}
