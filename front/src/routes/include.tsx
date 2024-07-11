import { Layout } from "components/layout";
import InputFields from "components/notasAdd/inputFields";
import NFTable from "components/notasAdd/table/nfTable";
import PCTabela from "components/notasAdd/table/pcTable";

export default function Inclusao() {
  return (
    <Layout>
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
      </Layout.Body>
    </Layout>
  );
}
